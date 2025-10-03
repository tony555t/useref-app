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

import React, { useRef, useEffect } from "react";

function Login() {
  const usernameRef = useRef(null);

  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Login</h2>
      <form>
        <label>
          Username:{" "}
          <input type="text" placeholder="Enter username" />
        </label>
        <br />
        <label>
          Password: <input type="password"ref={usernameRef} placeholder="Enter password" />
        </label>
      </form>
    </div>
  );
}

export default Login;
