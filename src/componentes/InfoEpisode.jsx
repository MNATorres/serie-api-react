import { useState, useEffect } from "react";

function InfoEpisode({ episodeNumber }) {
  const [episode, setEpisode] = useState(null);

  const url = episode =>
    `https://api.themoviedb.org/3/tv/92749/season/1/episode/${episode}?api_key=133f4d8b4fed128b27fa0bb407956c56&language=es-ES`;
  const fetchEpisodeInfromation = async episode => {
    const response2 = await fetch(url(episode));
    const responseJSON2 = await response2.json();
    setEpisode(responseJSON2);
    console.log(responseJSON2)
  };

  useEffect(() => {
    if (episodeNumber == null) return;
    fetchEpisodeInfromation(episodeNumber);
  }, [episodeNumber]);
 
  if (episode) {
    const { name, overview, still_path, crew } = episode;

    return (
      <div className="info-episode">
        <p>Capitulo {episodeNumber}</p>
        <h2>{name}</h2>
        <p>{overview}</p>
        <img className="img-capitulo" src={`https://image.tmdb.org/t/p/original${still_path}`} />
        <p>{crew.join(',')}</p>
      </div>
    );
  }
  return <></>;
}

export default InfoEpisode;
