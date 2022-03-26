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

// const myProfile = ["配列", 28];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// const [name, age] = myProfile; //配列内には名前がないので順番に入る
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは!${name}さん`);
// sayHello("テスト");
// sayHello(); // ="ゲスト" を入れてないとundefinedさんになる

/**
 * スプレッド構文 ...
 */
//配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// // sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1); // 順番に処理してる

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3); // 残りをまとめて受け取る

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4]; // arr4をコピー
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4); // スプレット構文でコピーすると元の配列は影響を受けない

// const arr7 = [...arr4, ...arr5]; // 結合
// console.log(arr7);

// const arr8 = arr4; // これでもコピーはできるけど、
// console.log(arr8);
// arr8[0] = 100;
// console.log(arr4); // 参照元が引き継がれるので元の配列まで影響を受けてしまい、バグの原因になる

/**
 * mapやfilterを使った配列の処理
 */
// const nameArr = ["田中", "山田", "佐藤"];
// 従来のやりかた
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// map
// const nameArr2 = nameArr.map((name) => { // 順に値が入ってきて
//   return name; // 順番に返して新しい関数を作る
// });
// console.log(nameArr2);

// nameArr.map((name, index) => console.log(`${index + 1}は${name}です`)); //従来のとやりかた同じことができる

// filter
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0; // 2で割った余りが0のとき=偶数のとき
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "佐藤") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueのとき : 条件がfalseのとき
// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// // console.log(num.toLocaleString()); //カンマで3桁区切り

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲です";
// };
// console.log(checkSum(50, 40));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrue");
// }
// if (flag1 && flag2) {
//   console.log("1も2もtrue");
// }

// || は左側がfalseなら右側を返す 左がtrueなら左を返す
// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す 左がfalseなら左を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);