import * as React from 'react';
import { createRoot } from "react-dom/client";

function MyFunctionComponent() {
  const [number, setAge] = React.useState(0);
  React.useEffect(()=>{
    console.log('123')
    return ()=>{
      console.log('456')
    }
  })
  return <button onClick={() => {
    setAge(number + 1);
    // setAge((state) => state + 1);
    // setAge(number + 1);
  }}>{number}</button>
}

const root = createRoot(document.getElementById("root"));
root.render(<MyFunctionComponent />);
