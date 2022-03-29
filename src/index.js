import React from "react";
import ReactDom from "react-dom";

const App = () => {
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

ReactDom.render(<App />, document.getElementById("root"));
