import axios from "axios";
// as ferramentas comeladas com use são hooks de manuseio da biblioteca React
import React, {useState, useEffect} from "react";
import estilos from './Lista.module.css';
import { Modal } from "../Modal/Modal";
import { Card } from "../Card/Card";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export function List_Movies({url}){

    // mostra se foi selecionado um filme para a visualização
    const [selectdMovie, setselectdMovie] = useState(null); // variável
    // crio uma variavel chamada movie, e "seto" o estado dela como vazio
    const [movies, setMovie] = useState([]); // lista

    const API_key = 'af26cce282aecf5c6cc39a264f29d0a7';
    const API_url = 'https://api.themoviedb.org/3';

    // Efect trabalha com uma estrutura especifica parametros(), script{} e dependencias[]
    useEffect(() => {
        axios.get(`${API_url}/${url}/popular?api_key=${API_key}&language=pt-BR`)
            .then(response =>{
                console.log(response.data.results);
                setMovie(response.data.results)
            })
            .catch(error => {
                console.log('Error', error);
            })
    }, []);

    let settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const handleOpenModal = (movie) => {
        setselectdMovie(movie);
    };

    const handleCloseModal = () => {
        setselectdMovie(null);
    };

    const renderSlidersMovies = () => {
        const qnt_movie = 7;
        const sliders = [];
        for (let i = 0; i < movies.length; i += qnt_movie) {
            sliders.push(
                <Slider key={i} {...settings}>
                    {movies.slice(i, i + qnt_movie).map(movie => (
                        <Card key={movie.id} 
                              movie={movie} 
                              onOpenModal={handleOpenModal} 
                              link={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                    ))}
                </Slider>
            );
        }
        return sliders;
    };

    return(
        <div className={estilos.containerFundo}>
            {renderSlidersMovies()}
            {selectdMovie && (<Modal movie={selectdMovie} onClose={handleCloseModal} />)}
        </div>

    )
}