import fetch from "cross-fetch"

const API_URL = "https://yts.mx/api/v2/list_movies.json"

export  const getMovies = (limit, rating) =>  {

    let REQUEST_URL = API_URL;

    if(limit >0){
        console.log("=---")
        REQUEST_URL += `limit=${limit}`;
    }

    if(rating >0){
        console.log("sdfsdfs")
        REQUEST_URL += `&minimum_rating=${rating}`;
    }

    console.log(REQUEST_URL)
    return fetch( `${REQUEST_URL}` )
        .then(res => res.json())
        .then(json=> {
            return json.data.movies }
        );
}

export const getById = id => {


    const filteredPeople = movies.filter(movie => movie.id === String(id) );

    return  filteredPeople[0]
}