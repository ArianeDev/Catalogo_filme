import { Routes, Route } from "react-router-dom";
import { Main } from '../Pages/index';
import { Series } from "../Pages/series";
import { Perfil } from "../Pages/perfil";
import { Conteudo } from "../Componentes/Conteudo/Conteudo";

export function Rotas(){
    return(
        <Routes>
            <Route path="/" element={<Main/>}>
                <Route index element={<Conteudo />} />
                <Route path='perfil' element={<Perfil/>}/>
                <Route path='serie' element={<Series/>}/>
            </Route>
        </Routes>
    )
}