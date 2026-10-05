const FACES = [
  { pairId: 'sun', src: 'assets/images/sun.svg', alt: 'Солнце' },
  { pairId: 'moon', src: 'assets/images/moon.svg', alt: 'Луна' },
  { pairId: 'star', src: 'assets/images/star.svg', alt: 'Звезда' },
  { pairId: 'leaf', src: 'assets/images/leaf.svg', alt: 'Лист' },
  { pairId: 'drop', src: 'assets/images/drop.svg', alt: 'Капля' },
  { pairId: 'bolt', src: 'assets/images/bolt.svg', alt: 'Молния' },
  { pairId: 'heart', src: 'assets/images/heart.svg', alt: 'Сердце' },
  { pairId: 'gem', src: 'assets/images/gem.svg', alt: 'Кристалл' },
];

export function createDeck() {
  return FACES.flatMap((face) => [
    { id: `${face.pairId}-1`, ...face },
    { id: `${face.pairId}-2`, ...face },
  ]);
}
