// import NumberCardDeck from 'domain/number_card_deck';
const NumberCardDeck = require('domain/number_card_deck');

test("番号カードの山札を作成でき,100枚のカードが含まれる", () => {
  const deck = new NumberCardDeck();
  expect(deck).not.toBeNull();
  expect(deck.cards.length).toBe(100);
});
