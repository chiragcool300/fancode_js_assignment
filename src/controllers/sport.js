const Sport = require('../models/sport');

const getAllSportsToursAndMatches = async () => {
    const matches = await Sport.getAllSportsToursAndMatches();
    const res = {};
    matches.forEach(match => {
        const { sportName, tourName, matchId, matchName, matchFormat, matchStartTime } = match;
        if (!res[sportName]) {
            res[sportName] = {};
        }
        if (!res[sportName][tourName]) {
            res[sportName][tourName] = [];
        }

        // Added matchId, matchName, matchFormat and matchStartTime information
        const matchInfo = {}
        matchInfo["id"] = matchId
        matchInfo["name"] = matchName
        matchInfo["format"] = matchFormat
        matchInfo["startTime"] = matchStartTime
        res[sportName][tourName].push(matchInfo);
    });
    return res;
}

module.exports = {
    getAllSportsToursAndMatches: getAllSportsToursAndMatches
}