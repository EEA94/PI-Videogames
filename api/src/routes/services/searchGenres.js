const axios = require("axios");
// const {API_KEY} = process.env;
// require('dotenv').config();
const {Genre} = require("../../db.js");


const getGenres = async()=>{
    let genres = [];
    
    let allInfo = await axios.get(`https://api.rawg.io/api/genres?key=a35a052cff734b16bc38244eaadec0c9`)
    allInfo.data.results.forEach(e => {
        genres.push({id:e.id, name:e.name})
    })
    genres.forEach(g=>{
        Genre.findOrCreate({
            where: {
                id:g.id,
                name: g.name
            }
        })
    })
    }


    module.exports = getGenres