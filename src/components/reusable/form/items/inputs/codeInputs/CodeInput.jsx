import React, {useRef} from "react";

const CodeInput = ({inactive, success, setCode, index, setValue, error, regex}) => {
  const inputRef = useRef();

  const handleInput = (e) => {
    const value = e.target.value;

    if (e.nativeEvent.inputType === 'deleteContentBackward') {
      if (inputRef.current.previousElementSibling) {
        inputRef.current.previousElementSibling.focus();
      }
      return;
    }


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



  const handleKeyPress = (e) => {
    if (e.key === 'ArrowLeft') {
      if (inputRef.current.previousElementSibling) {
        inputRef.current.previousElementSibling.focus();
      }
    }
    if (e.key === 'ArrowRight') {
      if (inputRef.current.nextElementSibling) {
        inputRef.current.nextElementSibling.focus();
      }
    }

    if (e.key === 'Backspace' && !inputRef.current.value) {
      if (inputRef.current.previousElementSibling) {
        inputRef.current.previousElementSibling.value = '';
        inputRef.current.previousElementSibling.focus();
      }
    }
  }

  return (
    <input
      type="text"
      className={`input input_code ${inactive ? '_inactive' : ''} ${success ? '_form-success' : ''} ${error ? '_form-error' : ''}`}
      maxLength={1}
      ref={inputRef}
      onInput={handleInput}
      onKeyDown={handleKeyPress}
    />
  );
};

export default CodeInput;
