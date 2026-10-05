import { createBoard, renderBoard } from './board.js';
import { createDeck } from './cards.js';
import { el } from './dom.js';
import { createHeader } from './header.js';
import { fisherYates } from './shuffle.js';

const { header } = createHeader();
const board = createBoard();
const main = el('main', { children: [board] });

document.body.append(header, main);

function startGame() {
  renderBoard(board, fisherYates(createDeck()));
}

startGame();
