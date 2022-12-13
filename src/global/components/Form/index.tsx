import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

import { InputComponent } from "./Input";
import { IConditionProps } from "./Input/type";

import { Form } from "./styles";

export function FormComponent({ isSearch, pokemonFilter }: IConditionProps) {
  const [pokemon, setPokemon] = useState();
  const router = useRouter();

  const onSubmitSearch = (event: FormEvent) => {
    event.preventDefault()

    router.push(`/pokemon?name=${pokemon}`);
  }


  return (
    <>
      {isSearch && (
        <Form onSubmit={onSubmitSearch}>
          <InputComponent
            placeholder="Busque por seu pokemon..."
            value={pokemon}
            onClick={() => {
              setPokemon(pokemon);
              router.push(`/pokemon?name=${pokemon}`);
            }}
            onChange={(e: any) => pokemonFilter(e.target.value)}
            iconSearch
          />
        </Form>
      )}
    </>
  );
}
