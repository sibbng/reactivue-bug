import React, { useState } from "react";
import "./App.css";
import { useSetup, ref } from "reactivue";

export function Counter(props: any) {
  const { count, inc } = useSetup((props) => {
    const count = ref(props.val);
    const inc = () => count.value++;
    return { count, inc };
  }, props);

  return (
    <div className="card" style={{ marginBottom: "25px" }}>
      <p>reactivue counter</p>
      <button onClick={inc}>{count}</button>
    </div>
  );
}

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="App">
      {show && <Counter val={10} />}
      <div>show counter: {show.toString()}</div>
      <button onClick={() => setShow(!show)}>toggle counter</button>
    </div>
  );
}

export default App;
