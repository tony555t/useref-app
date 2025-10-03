import {useRef} from "react";

  function MyComponent(){
    const reference = useRef(true);
    console.log(reference.current)

    return <div> check the console</div>
  }

  export default MyComponent;