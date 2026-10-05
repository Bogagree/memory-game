import { el } from './dom.js';

export function createBoard() {
  return el('div', {
    className: 'board',
    attrs: { role: 'group', 'aria-label': 'Игровое поле' },
  });
}

export function renderBoard(board, cards) {
  board.replaceChildren(
    ...cards.map((card, index) => createCard(card, index)),
  );
}

function createCard(card, index) {
  const back = el('span', {
    className: 'card__back',
    attrs: { 'aria-hidden': 'true' },
  });

  const face = el('img', {
    className: 'card__face',
    attrs: {
      src: card.src,
      alt: card.alt,
    },
  });

  return el('button', {
    className: 'card',
    attrs: {
      type: 'button',
      'data-card-id': card.id,
      'data-pair-id': card.pairId,
      'aria-label': `Карточка ${index + 1}`,
    },
    children: [back, face],
  });
}
