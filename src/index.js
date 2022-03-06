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
const val5 = ["dog", "cat"];
val5[0] = "pug";
val5.push("bird"); // 追加もできる
console.log(val5);
