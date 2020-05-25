import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import * as S from "./styles";

interface TextInputProps {
  init: string;
  fontFamily?: string;
  fontSize: number;
  fontWeight?: number;
  lineHeight?: number;
  makeNewLine: boolean;
}

function TextInput({ init, fontFamily, fontSize, fontWeight, lineHeight, makeNewLine }: TextInputProps) {
  const ref = useRef(null);
  const [text, setText] = useState(init);
  const [editable, setEditable] = useState(false);
  const editOn = () => {
    setEditable(true);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditable(!editable);
    }
  };
  const handleClickOutside = (e) => {
    if (editable == true && !ref.current.contains(e.target)) setEditable(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside, true);
  });
  return (
    <>
      <span ref={ref}>
        {editable ? (
          <S.Input
            type="text"
            value={text}
            onChange={(e) => handleChange(e)}
            onKeyDown={handleKeyDown}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
            makeNewLine={makeNewLine}
          />
        ) : (
          <S.Text
            onClick={() => editOn()}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            lineHeight={lineHeight}
          >
            {text}
          </S.Text>
        )}
        {makeNewLine ? <br /> : <></>}
      </span>
    </>
  );
}

export default TextInput;
