// import {useRef} from "react";

// import { useEffect, useRef } from "react";

//   function MyComponent(){
//     const reference = useRef(true);
//     console.log(reference.current)

//     return <div> check the console</div>
//   }

//   export default MyComponent;

// import { useRef} from "react";

// function MyComponent(){
//   const reference = useRef(true);
//   console.log(reference.current)

//   return <div>check the console</div>
// }
// export default MyComponent;

// import {useRef} from "react";
// function MyComponent(){
//   const reference = useRef(true);// to create an object like {current:true}
//   const handleUpdate =()=>{
//     reference.current = !reference.current;
//   };
//   console.log(reference.current)
//   return <button onClick={handleUpdate}>Update </button>
// }
// export default MyComponent;

// import { useRef, useState } from "react";

// function MoneyTracker() {
//   const balance = useRef(1000); // stores actual value
//   const [displayBalance, setDisplayBalance] = useState(balance.current); // used for UI

//   const handleAddMoney = () => {
//     balance.current += 500;
//     setDisplayBalance(balance.current); // update UI
//   };

//   const handleDeductMoney = () => {
//     balance.current -= 200;
//     setDisplayBalance(balance.current); // update UI
//   };

//   return (
//     <div>
//       <h3>Balance: {displayBalance}</h3>
//       <button onClick={handleAddMoney}>Add 500</button>
//       <button onClick={handleDeductMoney}>Deduct 200</button>
//     </div>
//   );
// }

// export default MoneyTracker;

// import React, { useRef, useEffect } from "react";

// function Login() {
//   const usernameRef = useRef(null);

//   useEffect(() => {
//     usernameRef.current.focus();
//   }, []);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Login</h2>
//       <form>
//         <label>
//           Username:{" "}
//           <input type="text"ref={usernameRef} placeholder="Enter username" />
//         </label>
//         <br />
//         <label>
//           Password: <input type="password"placeholder="Enter password" />
//         </label>
//       </form>
//     </div>
//   );
// }

// export default Login;


// import { useState, useRef, useEffect } from 'react';
    
//     function Counter() {
//       const [count, setCount] = useState(0);
//       const previousCountRef = useRef(count); 
    
//       useEffect(() => {
//         if (previousCountRef.current !== count) {
//           console.log('Count changed:', count, '(Previous:', previousCountRef.current, ')');
//         }
//         previousCountRef.current = count; 
//       }, [count]);
    
//       return (
//         <div>
//           <p>Count: {count}</p>
//           <button onClick={() => setCount(count + 1)}>Increment</button>
//         </div>
//       );
//     }
//     export default Counter

import { useState, useRef, useMemo } from "react";

export default function CalculationComponent() {
  const [inputNumber, setInputNumber] = useState(10);
  const calculateResult = useRef(null);

  // Efficient Fibonacci
  const calculateFib = (n) => {
    if (n <= 1) return n;
    
    let prev = 0, curr = 1;
    for (let i = 2; i <= n; i++) {
      const next = prev + curr;
      prev = curr;
      curr = next;
    }
    return curr;
  };

  const memoizedResult = useMemo(() => {
    // Check if we already calculated this input
    if (
      calculateResult.current && 
      calculateResult.current.input === inputNumber
    ) {
      console.log("Using cached result from useRef");
      return calculateResult.current.result;
    } else {
      console.log("Calculating new result");
      const result = calculateFib(inputNumber);
      calculateResult.current = { input: inputNumber, result };
      return result;
    }
  }, [inputNumber]);

  return (
    <div>
      <input 
        type="number" 
        value={inputNumber}
        onChange={(e) => setInputNumber(parseInt(e.target.value, 10) || 0)}
      />
      <p>
        Result of {inputNumber} is: {memoizedResult}
      </p>
    </div>
  );
}