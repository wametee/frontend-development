import  {useEffect, useState} from 'react'

// Here is an example of a useEffect Hook that is dependent on a variable. If the count variable updates, the effect will run again:
// If there are multiple dependencies, they should be included in the useEffect dependency array.
const useEffectFun = () => {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here
  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  )
}

export default useEffectFun


// Clean up the timer at the end of the useEffect Hook:
// Effect Cleanup
// Some effects require cleanup to reduce memory leaks.

// Timeouts, subscriptions, event listeners, and other effects that are no longer needed should be disposed.

// We do this by including a return function at the end of the useEffect Hook.

// import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

// function Timer() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let timer = setTimeout(() => {
//     setCount((count) => count + 1);
//   }, 1000);

//   return () => clearTimeout(timer)
//   }, []);

//   return <h1>I've rendered {count} times!</h1>;
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Timer />);
