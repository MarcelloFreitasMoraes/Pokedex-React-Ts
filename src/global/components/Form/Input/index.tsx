import { useRef, useEffect } from "react";

import * as S from "./styles";
import { IContentProps } from "./types";

export function InputComponent({
  onChange,
  placeholder,
  value, 
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
    </S.InputField>
  );
}
