/**
 * const, letなどの変数宣言
 */

// var val１ = "var変数";
// console.log(val１);

// // var変数は上書き可能
// val１ = "var変数を上書き";
// console.log(val１);

// // var変数は際宣言可能
// var val１ = "var変数を再宣言";
// console.log(val１);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// constは上書き不可能
// val3 = "const変数を上書き";

// constは再宣言不可能
// const val3 = "const変数を再宣言";

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "テスト",
//   age: 28
// };
// val4.name = "テスト2";
// val4.address = "Aichi"; // 追加もできる
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "pug";
// val5.push("bird"); // 追加もできる
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "テスト";
// const age = "28";
// // 「私の名前はテストです。年齢は28歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
//   const func2 = (str) => { // strの()は省略可能
//   return str; // 囲ってるときはreturn必須
// };
// const func2 = (str) => str; // 処理が1行のときは{}も省略可能
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "オブジェクト",
//   age: 28
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}です。`;
// console.log(message2);

const myProfile = ["配列", 28];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
console.log(message3);

const [name, age] = myProfile; //配列内には名前がないので順番に入る
const message4 = `名前は${name}です。年齢は${age}です。`;
console.log(message4);
