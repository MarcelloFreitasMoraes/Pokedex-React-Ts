import { useRef, useEffect } from "react";

import * as S from "./styles";
import { IContentProps } from "./types";

export function InputComponent({
  onClick,
  onChange,
  placeholder,
  value,
  iconSearch, 
}: IContentProps) {
  const focusInput = useRef<any>(null);

  useEffect(() => {
    focusInput.current.focus();
  }, []);

  return (
    <S.InputField>
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        ref={focusInput}
        value={value}
      />
        {iconSearch && (
        <button type="submit" onClick={onClick}>
          <S.SearchIcon />
        </button>
      )}     
    </S.InputField>
  );
}
