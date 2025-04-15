import estilos from './Conteudo.module.css';
import { List_Movies } from '../List_Movies/List_Movies';
import { Banner } from '../Banner/Banner';

export function Conteudo({url}){

    return(
        <main className={estilos.conteiner}>
            <Banner />
            <List_Movies
                url={url || "movie" }
            />
        </main>
    )
}