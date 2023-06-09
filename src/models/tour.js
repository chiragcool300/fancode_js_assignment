const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
// Added the index on tours.name and using this subquery
// We can optimize the query execution and improve the performance of the endpoint, reducing the latency even when there is a large number of tours.
    const statement = 'SELECT * FROM matches WHERE tourId IN (SELECT id FROM tours WHERE name = ?);';
    const parameters = [ params.name ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}