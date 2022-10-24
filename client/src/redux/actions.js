import axios from "axios";

export function getVideogames(){
    return async function(dispatch){
        const videogames = await axios.get(`${axios.defaults.baseURL}/videogames`)
        return dispatch({type:'GET_VIDEOGAMES', payload: videogames.data})
}
}

export function getGenres(){
    return function(dispatch){
        axios.get('https://demovideogames-deploy.herokuapp.com/genres')
        .then(response=>
            dispatch({type:'GET_GENRES', payload:response.data})
            )
    }
}

export function getVideogamesByName(name){
    return async function(dispatch){
        const names = await axios.get(`${axios.defaults.baseURL}/videogames?name=${name}`)
        return dispatch({type:'GET_BY_NAME', payload:names.data})
    }
}

export function getVideogameById(id){
    return async function(dispatch){
        const findId = await axios.get(`${axios.defaults.baseURL}/videogame/${id}`)
        return dispatch({type:'GET_BY_ID', payload:findId.data})
    }
}

export function postVideogame(post){
    return async function(dispatch){
        const data = await axios.post(`${axios.defaults.baseURL}/videogame`, post)
        return data;
    }
}

export function orderByName(payload){
        return {type:'ORDER_BY_NAME', payload}
}

export function orderByRating(payload){
    return {type:'ORDER_BY_RATING', payload}
}

export function filterByCreatedAndRAWG(payload){
    return {type:'CREATED_RAWG', payload}
}

export function filterByGenres(payload){
    return {type:'FILTER_BY_GENRES', payload}
}

export function clearDetail(){
    return {type:'CLEAR_DETAIL'}
}

export function savePage(payload){
    return {type:'SAVE_PAGE', payload}
}