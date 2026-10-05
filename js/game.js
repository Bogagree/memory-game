import { createDeck } from './cards.js';
import { fisherYates } from './shuffle.js';

export const MISMATCH_DELAY_MS = 1000;

export function startGame() {
  return {
    cards: fisherYates(createDeck()).map((card) => ({
      ...card,
      isFaceUp: false,
      isMatched: false,
    })),
    moves: 0,
    matchedPairs: 0,
    phase: 'idle',
    openCardId: null,
    mismatchTimerId: null,
    resultSaved: false,
  };
}

export function flipCard(state, cardId) {
  const card = state.cards.find((item) => item.id === cardId);

  if (
    !card
    || state.phase === 'locked'
    || state.phase === 'won'
    || card.isFaceUp
    || card.isMatched
  ) {
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
  const moves = state.moves + 1;

  if (matched) {
    const matchedPairs = state.matchedPairs + 1;

    return {
      ...state,
      moves,
      matchedPairs,
      phase: matchedPairs === 8 ? 'won' : 'idle',
      openCardId: null,
      cards: setFaceUp(state.cards, [first.id, card.id], true),
    };
  }

  return {
    ...state,
    moves,
    phase: 'locked',
    openCardId: null,
    cards: setFaceUp(state.cards, [first.id, card.id], false),
  };
}

export function closeMismatch(state) {
  if (state.phase !== 'locked') {
    return state;
  }

  return {
    ...state,
    phase: 'idle',
    mismatchTimerId: null,
    cards: state.cards.map((card) => (
      card.isMatched ? card : { ...card, isFaceUp: false }
    )),
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
