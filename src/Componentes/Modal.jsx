export function Modal({movie, onClose}){

    // se clicando fora de um card, não quero que o código seja executado
    if(!movie){
        return null;
    }

    console.log("Modal resenderizada")
    console.log(movie)

    return(
        <div className="container">
            <div>
                <div>
                    <h2>{movie.title}</h2>
                    <button onClick={onClose}>x</button>
                </div>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <ul>
                        <li>{`Popularidade: ${movie.popularity ?? 'Não disponível no momento, aguarde'}`}</li>
                        <li>{`Data de Lançamento: ${movie.realise_date}`}</li>
                        <li>{`Quantidade de Votos: ${movie.vote_count}`}</li>
                        <li>{`Sinopse: ${movie.overviwe}`}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}