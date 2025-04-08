import estilos from './BarraNavegacao.module.css';

export function BarraNavegacao(){
    return(
        <nav className={estilos.conteiner}>
            <ul>
                <li>
                    <span class="material-symbols-outlined">
                        home
                    </span>
                    Home
                </li>
                <li>
                    <span class="material-symbols-outlined">
                        movie
                    </span>
                    Filmes
                </li>
                <li>
                    <span class="material-symbols-outlined">
                        person
                    </span>
                    Perfil
                </li>
            </ul>
        </nav>
    )
}