import { createBoard, renderBoard } from './board.js';
import { el } from './dom.js';
import { flipCard, startGame } from './game.js';
import { createHeader } from './header.js';

const { header } = createHeader();
const board = createBoard();
const main = el('main', { children: [board] });

let state = startGame();

function paint() {
  renderBoard(board, state.cards, (cardId) => {
    const next = flipCard(state, cardId);
    if (next === state) {
      return;
    }
    state = next;
    paint();
  });
}

document.body.append(header, main);
paint();
