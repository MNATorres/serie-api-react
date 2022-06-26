function Apis() {

   
    const url = "https://api.themoviedb.org/3/tv/92749/season/1/episode/1?api_key=133f4d8b4fed128b27fa0bb407956c56&language=es-ES";
    const fetchApi2 = async () => {
      const response = await fetch(url);
      const responseJSON = await response.json();
      console.log(responseJSON);
    };

    return(
        <div className="apis"></div>
    )
}

