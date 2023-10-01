// import NumberCardType from "domain/number_card";
const NumberCardType = require('./number_card');

class NumberCardDeck {
  cards: typeof NumberCardType[] = [];

  constructor() {
    for (let i = 1; i <= 100; i++) {
      const card = {
        number: i,
        isFaceUp: false,
        owner: null
      };
      this.cards.push(card);

      // this.cards.push({
      //   number: i,
      //   isfaceup: false,
      //   owner: null
      // });
    }
  };

  shuffle() {
    for (let i = this.cards.length - 1; i >= 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[rand]] = [this.cards[rand], this.cards[i]];
    }
  };
}

// export default NumberCardDeck;
exports.NumberCardDeck = NumberCardDeck;
