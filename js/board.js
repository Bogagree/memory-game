import { el } from './dom.js';

export function createBoard() {
  return el('div', {
    className: 'board',
    attrs: { role: 'group', 'aria-label': 'Игровое поле' },
  });
}

export function renderBoard(board, cards, onCardClick) {
  board.replaceChildren(
    ...cards.map((card, index) => createCard(card, index, onCardClick)),
  );
}

function createCard(card, index, onCardClick) {
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

  const button = el('button', {
    className: card.isFaceUp ? 'card card--flipped' : 'card',
    attrs: {
      type: 'button',
      'data-card-id': card.id,
      'data-pair-id': card.pairId,
      'aria-label': `Карточка ${index + 1}`,
    },
    children: [back, face],
  });

  button.addEventListener('click', () => {
    onCardClick(card.id);
  });

  return button;
}
