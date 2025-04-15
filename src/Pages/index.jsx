// Estrutura
import React, {useState, useEffect} from "react";
import { BarraNavegacao  } from "../Componentes/BarraNavegacao/BarraNavegacao";
// Outtlet é um espaço que serve para rederizar o componente da rota. Então se clicar no Link "perfil, vai exibir o componente que corresponde ao endereço
import { Outlet } from "react-router-dom";

export function Main(){

    return(
        <>
            <BarraNavegacao />
            <Outlet/>
        </>
    )
}