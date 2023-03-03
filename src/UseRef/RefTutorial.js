import React, { useRef } from "react";
import { useState } from "react/cjs/react.development";

function RefTutorial() {
  const inputRef = useRef(null);
  const [name, setName] = useState("Maruf")

  const onClick = () => {
    inputRef.current.focus();
    setName(inputRef.current.value)
    inputRef.current.value = ""
  };
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder="Ex..." ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
}

export default RefTutorial;
