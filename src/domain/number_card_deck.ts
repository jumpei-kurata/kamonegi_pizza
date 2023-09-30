type NumberCardDeck = Array<NumberCard>;

class NumberCardDeck {
  deck: NumberCardDeck;

  constructor() {
    for (let i = 1; i <= 100; i++) {
      this.deck.push(new NumberCard(i));
    }
    this.deck = this.shuffle(this.deck);j
  }
 
  // フィッシャー・イェーツのシャッフルアルゴリズム
  shuffle(array: NumberCardDeck): NumberCardDeck {
    const length = array.length;
    for (let i = length - 1; i >= 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [array[i], array[rand]] = [array[rand], array[i]];
    }
    return array;
  }

}
