import React from 'react'
import { TypographicComponent } from '../Typographic'
import * as S from './styles'
import Image from 'next/image'
import ashNot from "../../assets/notfound1.png";
import router from 'next/router';

export default function NotFound() {

    return (
        <S.Question>
             {/* eslint-disable-next-line @next/next/no-img-element */}
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <div>
            <Image src={ashNot} alt="Loading"  style={{
        width: "auto",
        height:"300px",
        margin: "auto",
        display: "block",
      }}/>
      </div>
      <div>
            <TypographicComponent title={'Page does not exist return to home'} large />
            <br/>
            <S.Button onClick={() => {router.push('/')}}>Voltar</S.Button>
            </div>
        </S.Question>
    )
}