import { createBoard, renderBoard } from './board.js';
import { createDeck } from './cards.js';
import { el } from './dom.js';
import { createHeader } from './header.js';

const { header } = createHeader();
const board = createBoard();
const main = el('main', { children: [board] });

document.body.append(header, main);
renderBoard(board, createDeck());
