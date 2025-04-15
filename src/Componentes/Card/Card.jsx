import estilos from './Card.module.css';

export function Card({movie, onOpenModal, link}){
    return(
        <div className={estilos.container}>
            <img src={link} 
                 onClick={() => onOpenModal(movie)}
            />
            <h4>{movie.title || movie.name}</h4>
        </div>
    );
}