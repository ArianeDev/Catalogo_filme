import estilos from './Conteudo.module.css';
import { Card } from './Card';
import { Lista } from './Lista';

export function Conteudo(){
    return(
        <main className={estilos.conteiner}>
            <Lista />
        </main>
    )
}