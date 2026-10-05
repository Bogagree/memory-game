import { createBoard, renderBoard } from './board.js';
import { el } from './dom.js';
import { closeMismatch, flipCard, MISMATCH_DELAY_MS, startGame } from './game.js';
import { createHeader } from './header.js';
import { createLeaderboardContent, saveResult } from './leaderboard.js';
import { createModal } from './modal.js';

const { header, leaderboardButton, moves, pairs } = createHeader();
const board = createBoard();
const main = el('main', { children: [board] });
const modal = createModal();

let state = startGame();
let winModalOpened = false;

function openWinModal() {
  const closeButton = el('button', {
    className: 'modal__button',
    text: 'Закрыть',
    attrs: { type: 'button' },
  });

  closeButton.addEventListener('click', () => {
    modal.close();
  });

  modal.root.setAttribute('aria-labelledby', 'win-title');
  modal.open(el('div', {
    className: 'modal__win',
    children: [
      el('h2', {
        className: 'modal__title',
        text: 'Победа',
        attrs: { id: 'win-title' },
      }),
      el('p', {
        className: 'modal__moves',
        text: `${state.moves} ходов`,
      }),
      el('div', {
        className: 'modal__actions',
        children: [
          el('button', {
            className: 'modal__button',
            text: 'Новая игра',
            attrs: { type: 'button' },
          }),
          closeButton,
        ],
      }),
    ],
  }));
}

function paint() {
  moves.textContent = `${state.moves} ходов`;
  pairs.textContent = `${state.matchedPairs} из 8`;
  renderBoard(board, state.cards, (cardId) => {
    const next = flipCard(state, cardId);
    if (next === state) {
      return;
    }

    state = next;

    if (state.phase === 'locked') {
      const mismatchTimerId = setTimeout(() => {
        state = closeMismatch(state);
        paint();
      }, MISMATCH_DELAY_MS);
      state = { ...state, mismatchTimerId };
    }

    paint();
  });

  if (state.phase === 'won' && !state.resultSaved) {
    saveResult(state.moves);
    state = { ...state, resultSaved: true };
  }

  if (state.phase === 'won' && !winModalOpened) {
    winModalOpened = true;
    openWinModal();
  }
}

leaderboardButton.addEventListener('click', () => {
  modal.root.setAttribute('aria-labelledby', 'leaderboard-title');
  modal.open(createLeaderboardContent(() => {
    modal.close();
  }));
});

document.body.append(header, main, modal.root);
paint();
