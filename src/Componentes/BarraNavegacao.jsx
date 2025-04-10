import estilos from './BarraNavegacao.module.css';

export function BarraNavegacao(){
    return(
        <header className={estilos.conteiner}>
            <h1>Ariflix</h1>
            <nav>
                <ul>
                    <li>
                        <span class="material-symbols-outlined">home</span>
                        Home
                    </li>
                    <li>
                        <span class="material-symbols-outlined">movie</span>
                        Filmes
                    </li>
                    <li>
                        <span class="material-symbols-outlined">person</span>
                        Perfil
                    </li>
                </ul>
            </nav>

        </header>
    )
}