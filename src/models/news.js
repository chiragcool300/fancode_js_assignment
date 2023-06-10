const mysql = require('../lib/mysql');

const getNewsByMatchId = async params => {
    const statement = 'SELECT * FROM news WHERE matchId = ?;';
    const parameters = [ params.id ];
    return await mysql.query(statement, parameters);
}

const getNewsByTourId = async params => {
    const statement = 'SELECT * FROM news WHERE tourId = ?;';
    const parameters = [ params.id ];
    return await mysql.query(statement, parameters);
}

const getNewsBySportId = async params => {
    const statement = 'SELECT * FROM news WHERE sportId = ?;';
    const parameters = [ params.id ];
    return await mysql.query(statement, parameters);
}

const createNews = params => {
    const statement = 'INSERT into news (title, description, sportId, tourId, matchId) VALUES (?, ?, ?, ?, ?);';
    const parameters = [ params.title, params.description, params.sportId, params.tourId, params.matchId ];
    return mysql.query(statement, parameters);
}

module.exports = {
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId,
    createNews: createNews
}