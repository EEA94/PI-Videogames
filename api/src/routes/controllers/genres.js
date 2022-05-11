const getGenres = require('../services/searchGenres')
const {Genre} = require('../../db')

const allGenres = async (req,res, next)=>{
    try {
        getGenres();
        const allGenresDb = await Genre.findAll()
        res.send(allGenresDb);
    } catch (error) {
        next(error)
    }
}

module.exports = allGenres;

