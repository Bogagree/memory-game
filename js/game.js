import { createDeck } from './cards.js';
import { fisherYates } from './shuffle.js';

export function startGame() {
  return {
    cards: fisherYates(createDeck()).map((card) => ({
      ...card,
      isFaceUp: false,
      isMatched: false,
    })),
    phase: 'idle',
    openCardId: null,
  };
}

export function flipCard(state, cardId) {
  const card = state.cards.find((item) => item.id === cardId);

  if (!card || state.phase === 'locked' || card.isFaceUp || card.isMatched) {
    return state;
  }

  if (state.phase === 'idle') {
    return {
      ...state,
      phase: 'oneOpen',
      openCardId: card.id,
      cards: setFaceUp(state.cards, [card.id], false),
    };
  }

  const first = state.cards.find((item) => item.id === state.openCardId);
  const matched = first.pairId === card.pairId;

  if (matched) {
    return {
      ...state,
      phase: 'idle',
      openCardId: null,
      cards: setFaceUp(state.cards, [first.id, card.id], true),
    };
  }

  return {
    ...state,
    phase: 'locked',
    openCardId: null,
    cards: setFaceUp(state.cards, [first.id, card.id], false),
  };
}

function setFaceUp(cards, ids, matched) {
  const selected = new Set(ids);

  return cards.map((card) => {
    if (!selected.has(card.id)) {
      return card;
    }

    return {
      ...card,
      isFaceUp: true,
      isMatched: matched || card.isMatched,
    };
  });
}
