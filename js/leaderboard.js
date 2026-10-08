import { el } from './dom.js';

const STORAGE_KEY = 'memory-game-results';
const TOP_LIMIT = 10;

export function loadResults() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter(isResult);
  } catch {
    return [];
  }
}

export function saveResult(moves) {
  const results = loadResults();
  results.push({
    moves,
    playedAt: new Date().toISOString(),
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(results));
}

export function createLeaderboardContent(onClose) {
  const closeButton = el('button', {
    className: 'modal__button',
    text: 'Закрыть',
    attrs: { type: 'button' },
  });
  closeButton.addEventListener('click', onClose);

  const results = topResults(loadResults());
  const list = results.length === 0
    ? el('p', { className: 'leaderboard__empty', text: 'Пока нет результатов' })
    : createTable(results);

  return el('div', {
    className: 'modal__leaderboard',
    children: [
      el('h2', {
        className: 'modal__title',
        text: 'Таблица лидеров',
        attrs: { id: 'leaderboard-title' },
      }),
      list,
      el('div', {
        className: 'modal__actions',
        children: [closeButton],
      }),
    ],
  });
}

function topResults(results) {
  return [...results].sort(compareResults).slice(0, TOP_LIMIT);
}

function compareResults(a, b) {
  if (a.moves !== b.moves) {
    return a.moves - b.moves;
  }

  if (a.playedAt < b.playedAt) {
    return -1;
  }

  if (a.playedAt > b.playedAt) {
    return 1;
  }

  return 0;
}

function isResult(item) {
  return Boolean(item)
    && typeof item.moves === 'number'
    && Number.isFinite(item.moves)
    && typeof item.playedAt === 'string'
    && !Number.isNaN(Date.parse(item.playedAt));
}

function createTable(results) {
  return el('table', {
    className: 'leaderboard',
    children: [
      el('thead', {
        children: [
          el('tr', {
            children: [
              el('th', { text: 'Место', attrs: { scope: 'col' } }),
              el('th', { text: 'Ходы', attrs: { scope: 'col' } }),
              el('th', { text: 'Дата', attrs: { scope: 'col' } }),
            ],
          }),
        ],
      }),
      el('tbody', {
        children: results.map((result, index) => el('tr', {
          children: [
            el('td', { text: String(index + 1) }),
            el('td', { text: String(result.moves) }),
            el('td', { text: formatDate(result.playedAt) }),
          ],
        })),
      }),
    ],
  });
}

function formatDate(iso) {
  const date = new Date(iso);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');

  return `${day}.${month}.${date.getFullYear()}`;
}
