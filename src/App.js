import { useState, useEffect } from "react";
import "./App.css";
import Header from './componentes/Header'
import Buscador from "./componentes/Buscador";
import Capitulo from "./componentes/Capitulo";
import ReactPlayer from 'react-player'


//92749
function App() {
  const [serie, setSerie] = useState();

  const baseImg = "https://image.tmdb.org/t/p/original";
  const apikey = "api_key=133f4d8b4fed128b27fa0bb407956c56";
  const base = "https://api.themoviedb.org/3";
  const fetchApi = async () => {
    const response = await fetch(`${base}/tv/92749?${apikey}&language=es-ES`);
    const responseJSON = await response.json();
    setSerie(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const searchEpisode = number => {
    console.log(number);
  };

  return (
    <div className="App">
      <Header />
      <div className='contenedor-padre'>
        
      <div className="buscador-app">
        <Buscador searchEpisode={searchEpisode} />
        <Capitulo capitulo="" />
      </div>
      <div className="capitulo-info">
        {serie && (
          <>
            <h1>{serie.original_name}</h1>
            <h3>Season {serie.number_of_seasons}</h3>
            <h4>Resumen</h4>
            <p>{serie.overview}</p>
            <div className="img-moon">
              <img
                className="img-serie"
                src={`${baseImg}${serie.poster_path}`}
              />
            </div>
            <p>Producido por {serie.production_companies[0].name}</p>
            <img 
            className='marvel'
            src={`${baseImg}${serie.production_companies[0].logo_path}`} />
            <div className="videos">
            <ReactPlayer 
            url='https://www.youtube.com/watch?v=0STDZqXCTxs&ab_channel=MarvelLatinoam%C3%A9ricaOficial'
            width='100%'
             />
             <ReactPlayer 
            url='https://www.youtube.com/watch?v=27y7Dwvhq7g&ab_channel=ScenesIlove'
            width='100%'
             />
             <ReactPlayer 
            url='https://www.youtube.com/watch?v=w1AP1iaTcUA&ab_channel=MovieGasm.com'
            width='100%'
             />
             </div>
          </>
        )}
      </div>
      </div>
    </div>
  );
}

export default App;

//{
//   "adult":false,
//   "backdrop_path":"/xLWYkefC1wjRlnLKrKvaH6LrfQM.jpg",
//   "created_by":[
//      {
//         "id":1147923,
//         "credit_id":"5f970adf7719d700363e004a",
//         "name":"Jeremy Slater",
//         "gender":2,
//         "profile_path":"/fQKd49lOrhU80PQla8mmx3vSR20.jpg"
//      }
//   ],
//   "episode_run_time":[
//      47
//   ],
//   "first_air_date":"2022-03-30",
//   "genres":[
//      {
//         "id":10759,
//         "name":"Action & Adventure"
//      },
//      {
//         "id":10765,
//         "name":"Sci-Fi & Fantasy"
//      },
//      {
//         "id":9648,
//         "name":"Misterio"
//      }
//   ],
//   "homepage":"https://www.disneyplus.com/series/moon-knight/4S3oOF1knocS",
//   "id":92749,
//   "in_production":false,
//   "languages":[
//      "en"
//   ],
//   "last_air_date":"2022-05-04",
//   "last_episode_to_air":{
//      "air_date":"2022-05-04",
//      "episode_number":6,
//      "id":3453975,
//      "name":"Dioses y monstruos",
//      "overview":"El Caballero Luna se une a la lucha. Marc, Steven y Khonshu colaborarán para frenar a Ammit.",
//      "production_code":"",
//      "runtime":44,
//      "season_number":1,
//      "still_path":"/owNx8ZoryZZzp6WYqmTV9Umf1bQ.jpg",
//      "vote_average":6.9,
//      "vote_count":18
//   },
//   "name":"Caballero luna",
//   "next_episode_to_air":null,
//   "networks":[
//      {
//         "name":"Disney+",
//         "id":2739,
//         "logo_path":"/uzKjVDmQ1WRMvGBb7UNRE0wTn1H.png",
//         "origin_country":"US"
//      }
//   ],
//   "number_of_episodes":6,
//   "number_of_seasons":1,
//   "origin_country":[
//      "US"
//   ],
//   "original_language":"en",
//   "original_name":"Moon Knight",
//   "overview":"Steven Grant, un amable empleado de una tienda de regalos, sufre pérdidas de memoria y experimenta recuerdos de otra vida. Steven descubre que tiene un trastorno de identidad disociativo y que comparte cuerpo con el mercenario Marc Spector. A medida que los enemigos de Steven/Marc van convergiendo, debe lidiar con la complejidad de sus identidades mientras se sumerge en un misterio letal que habita entre los poderosos dioses de Egipto.",
//   "popularity":918.955,
//   "poster_path":"/5AHnvXfW0mtsm047OP54n4pnV0R.jpg",
//   "production_companies":[
//      {
//         "id":420,
//         "logo_path":"/hUzeosd33nzE5MCNsZxCGEKTXaQ.png",
//         "name":"Marvel Studios",
//         "origin_country":"US"
//      },
//      {
//         "id":176762,
//         "logo_path":null,
//         "name":"Kevin Feige Productions",
//         "origin_country":"US"
//      }
//   ],
//   "production_countries":[
//      {
//         "iso_3166_1":"US",
//         "name":"United States of America"
//      }
//   ],
//   "seasons":[
//      {
//         "air_date":"2022-03-30",
//         "episode_count":6,
//         "id":130604,
//         "name":"Temporada 1",
//         "overview":"",
//         "poster_path":"/eERpztUYmjcp5AYbhOSAuCR6Lx7.jpg",
//         "season_number":1,
//         "networks":[
//            {
//               "id":2739,
//               "logo":{
//                  "path":"/uzKjVDmQ1WRMvGBb7UNRE0wTn1H.png",
//                  "aspect_ratio":1.842477876106195
//               },
//               "name":"Disney+",
//               "origin_country":"US"
//            }
//         ]
//      }
//   ],
//   "spoken_languages":[
//      {
//         "english_name":"English",
//         "iso_639_1":"en",
//         "name":"English"
//      }
//   ],
//   "status":"Ended",
//   "tagline":"Abraza el Caos...",
//   "type":"Miniseries",
//   "vote_average":8.2,
//   "vote_count":1096
// }
