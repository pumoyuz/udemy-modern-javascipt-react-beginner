import React from "react";

const App = () => {
  //コンポーネント名はパスカルケースで
  return (
    <>
      {/* 
      reactでreturnするときは1つのタグで囲まないといけない
      不要なdivなどを防ぐためにReact.Fragmentで囲む
      空のかっこもReact.Fragmentと同じ扱いになる 
      */}
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

// 他から呼び出せるようにエクスポート
export default App;

// 拡張子は.jsでもエラーにはならないが、Reactコンポーネントであることをわかりやすくするために.jsxにするのがおすすめ
