// import {useRef} from "react";

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

import {useRef} from "react";
function MyComponent(){
  const reference = useRef(true);
  const handleUpdate =()=>{
    reference.current = !reference.current;
  };
  console.log(reference.current)
  return <button onClick={handleUpdate}>Update </button>
}
export default MyComponent;