import React from 'react'
import { TypographicComponent } from '../Typographic'
import * as S from './styles'
import Image from 'next/image'
import ashNot from "../../assets/notfound1.png";
import router from 'next/router';

export default function NotFound() {

    return (
        <S.Question>         
                <Image 
                src={ashNot} 
                alt="Loading" 
                />
                <br />
                <TypographicComponent title={'Page does not exist return to home'} description />
                <br />
                <S.Button onClick={() => { router.push('/') }}>Voltar</S.Button>
        </S.Question>
    )
}