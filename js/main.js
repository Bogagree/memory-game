import { createBoard, renderBoard } from './board.js';
import { el } from './dom.js';
import { closeMismatch, flipCard, MISMATCH_DELAY_MS, startGame } from './game.js';
import { createHeader } from './header.js';

const { header, moves, pairs } = createHeader();
const board = createBoard();
const main = el('main', { children: [board] });

let state = startGame();

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
}

document.body.append(header, main);
paint();
