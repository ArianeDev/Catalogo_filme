import estilos from './BarraNavegacao.module.css';
import { Link } from 'react-router-dom';

export function BarraNavegacao(){
    return(
        <header className={estilos.conteiner}>
            <h1>Ariflix</h1>
            <nav>
                <ul>
                    <Link to="/">
                        <li>
                            <span class="material-symbols-outlined">home</span>
                            Home
                        </li>
                    </Link>
                    <Link to="serie">
                        <li>
                            <span class="material-symbols-outlined">serie</span>
                            Series
                        </li>
                    </Link>
                    <Link to="perfil">
                        <li>
                            <span class="material-symbols-outlined">person</span>
                            Perfil
                        </li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}

// npm i react-router-dom