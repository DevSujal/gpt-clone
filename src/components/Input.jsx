import React, {useEffect, useId, useRef } from "react";

function Input({
  type = "text",
  placeholder,
  label,
  className = "",
  inputVal,
  setInputVal,
  handleKeyPress,
  ...props
}) {
  const id = useId();

  const inputRef = useRef(null);
  useEffect(() => {
    const currentRef = inputRef.current;
    currentRef?.addEventListener("keypress", handleKeyPress);

    return () => {
      currentRef?.removeEventListener("keypress", handleKeyPress);
    };
  }, [inputVal]);

  return (
    <input
      ref={inputRef}
      id={id}
      value={inputVal}
      onChange={(e) => setInputVal(e.target.value)}
      className={`p-3 rounded flex justify-center items-start text-white ${className}`}
      type={type}
      placeholder={placeholder}
      name={`${label}`}
      {...props}
    />
  );
}

export default Input;
