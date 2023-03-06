import React, {useRef} from "react";

const CodeInput = ({inactive, success}) => {
  const inputRef = useRef();

  const handleInput = (e) => {
    const value = e.target.value;

    if (/^\d{0,1}$/.test(value)) {
      inputRef.current.value = value;
      inputRef.current.blur();

      if (inputRef.current.nextElementSibling) {
        inputRef.current.nextElementSibling.focus();
      }
    } else {
      inputRef.current.value = "";
    }
  };

  return (
      <input
        type="text"
        className={`input input_code ${inactive ? '_inactive' : ''} ${success ? '_form-success' : ''}`}
        maxLength={1}
        ref={inputRef}
        onInput={handleInput}
      />
  );
};

export default CodeInput;