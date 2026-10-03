import { el } from './dom.js';

export function createBoard() {
  return el('div', {
    className: 'board',
    attrs: { role: 'group', 'aria-label': 'Игровое поле' },
  });
}
