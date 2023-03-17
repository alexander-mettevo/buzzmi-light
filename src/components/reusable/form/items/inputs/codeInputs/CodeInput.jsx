import React, {useRef} from "react";

const CodeInput = ({inactive, success, setCode, index, setValue, error, regex}) => {
  const inputRef = useRef();

  const handleInput = (e) => {
    const value = e.target.value;


    if (regex.test(value)) {
      inputRef.current.value = value;
      setCode((prev) => {
        const newCode = [...prev];
        newCode[index] = value;
        setValue('code', newCode.join(''));
        return newCode;
      });


      inputRef.current.blur();

      if (inputRef.current.nextElementSibling) {
        inputRef.current.nextElementSibling.focus();
      }
    } else {
      inputRef.current.value = "";
      setCode((prev) => {
        const newCode = [...prev];
        newCode[index] = "";
        setValue('code', newCode.join(''));
        return newCode;
      })
    }
  };

  return (
      <input
        type="text"
        className={`input input_code ${inactive ? '_inactive' : ''} ${success ? '_form-success' : ''} ${error ? '_form-error' : ''}`}
        maxLength={1}
        ref={inputRef}
        onInput={handleInput}
      />
  );
};

export default CodeInput;