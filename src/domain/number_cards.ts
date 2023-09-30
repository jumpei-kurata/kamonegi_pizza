/*
 * NumberCardクラス
 * 数字(1から100)
 * カードには裏表がある
 * カードには持ち主が記録される
 * {
 *   "number": 1,
 *   "isFaceUp": true,
 *   "owner": 1
 * }
*/

type NumberCardType = {
  number: number;
  isFaceUp: boolean;
  owner: number;
};
