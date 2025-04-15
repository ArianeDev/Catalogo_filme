import React, {useState, useEffect} from "react";
import { BarraNavegacao } from "../Componentes/BarraNavegacao/BarraNavegacao";
import { Conteudo } from "../Componentes/Conteudo/Conteudo";
import { Outlet } from "react-router-dom";

export function Series(){

    return(
        <>
            <Conteudo
                url="tv"
            />
        </>
    )
}
