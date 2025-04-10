import estilos from './Card.module.css';

export function Card({movie, onOpenModal}){
    return(
        <div className={estilos.container}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} 
                onClick={() => onOpenModal(movie)}
                />
            {/* <p>{movie.overview}</p> */}
            <h4>{movie.title}</h4>
        </div>
    );
}