const mysql = require('../lib/mysql');

const getAllTours = async () => {
    const statement = 'select * from tours;';
    const parameters = [];
    return await mysql.query(statement, parameters);
}

const getMatchesByTourName = async params => {
// Added an index on tours.name column
// Modified the below SQL query to use a subquery instead of a join:
// We had optimized the query execution and improved the performance of the endpoint even when there are large number of tours.
    const statement = 'SELECT * FROM matches WHERE tourId IN (SELECT id FROM tours WHERE name = ?);';
    const parameters = [ params.name ];
    return await mysql.query(statement, parameters);
}

module.exports = {
    getAllTours: getAllTours,
    getMatchesByTourName: getMatchesByTourName
}