import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectTutorial() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    setTimeout(() => {
      console.log("useLayoutEffect");
    }, 0);
    
  }, []);

  useEffect(() => {
    setTimeout(() => {
      console.log("useEffect");
    }, 0);
    
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectTutorial;
