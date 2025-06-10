function fetchMovieData(data){
    const  movie_arr = [];
    for (let moviesInfo of data.results){
        movie_arr.push({
            title: moviesInfo.title,
            img: moviesInfo.backdrop_path,
            vote_average: moviesInfo.vote_average
        })
    }
    return movie_arr;
}

export { fetchMovieData };