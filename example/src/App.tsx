import React, { useState } from "react";
import "./App.css";
import Button from "./../../packages/button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="content">
        <Button size="s" content="确定" />
      </div>
      <div className="content">
        <Button size="m" variant="outline" content="确定" />
      </div>
      <div className="content">
        <Button size="lg" variant="dashed" content="确定" />
      </div>
      <div className="content">
        <Button size="lg" variant="text" content="文字" />
      </div>
      <button>测试其他</button>
    </div>
  );
}

export default App;
