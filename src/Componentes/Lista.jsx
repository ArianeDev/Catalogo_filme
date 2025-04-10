// axios permite a comunicação com as páginas http
import axios from "axios";
// as ferramentas comeladas com use são hooks de manuseio da biblioteca React
import React, {useState, useEffect} from "react";
import estilos from './Lista.module.css';
import { Modal } from "./Modal";
import { Card } from "./Card";

const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
const API_url = 'https://api.themoviedb.org/3';

export function Lista(){

    // crio uma variavel chamada movie, e "seto" o estado dela como vazio
    const [movies, setMovie] = useState([]); // lista
    // mostra se foi selecionado um filme para a visualização
    const [selectdMovie, setselectdMovie] = useState(null); // variável

    // Efect trabalha com uma estrutura especifica parametros(), script{} e dependencias[]
    useEffect(() => {
        axios.get(`${API_url}/movie/popular?api_key=${API_key}&language=pt-BR`)
            .then(response =>{
                console.log(response.data.results);
                setMovie(response.data.results)
            })
            .catch(error => {
                console.log('Error', error);
            })
    }, []);

    const handleOpenModal = (movie) => {
        setselectdMovie(movie);
    };

    const handleCloseModal = () => {
        setselectdMovie(null);
    };

    return(
        <div className={estilos.containerFundo}>
            <figure>
                {movies.slice(0, 6).map(movie => (
                    <Card key = {movie.id} 
                    movie = {movie} 
                    onOpenModal = {handleOpenModal} />
                ))}
            </figure>
            {selectdMovie && (<Modal movie={selectdMovie} onClose={handleCloseModal} />)}
        </div>
    )
}