import { el } from './dom.js';

export function createHeader() {
  const newGameButton = el('button', {
    className: 'header__button',
    text: 'Новая игра',
    attrs: { type: 'button' },
  });

  const leaderboardButton = el('button', {
    className: 'header__button',
    text: 'Таблица лидеров',
    attrs: { type: 'button' },
  });

  const moves = el('p', {
    className: 'counters__moves',
    text: '0 ходов',
  });

  const pairs = el('p', {
    className: 'counters__pairs',
    text: '0 из 8',
  });

  const header = el('header', {
    className: 'header',
    children: [
      el('div', {
        className: 'header__actions',
        children: [newGameButton, leaderboardButton],
      }),
      el('div', {
        className: 'counters',
        children: [moves, pairs],
      }),
    ],
  });

  return { header, newGameButton, leaderboardButton, moves, pairs };
}
