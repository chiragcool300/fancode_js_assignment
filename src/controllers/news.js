const News = require('../models/news');

const getNewsByMatchId = async params => {
    const { id } = params;

    if (!id) {
        throw new Error('Missing required parameter: id');
    }

    return await News.getNewsByMatchId(params);
}

const getNewsByTourId = async params => {
    const { id } = params;

    if (!id) {
        throw new Error('Missing required parameter: id');
    }

    return await News.getNewsByTourId(params);
}

const getNewsBySportId = async params => {
    const { id } = params;

    if (!id) {
        throw new Error('Missing required parameter: id');
    }

    return await News.getNewsBySportId(params);
}

const createNews = params => {
    const { title, description, tourId, matchId, sportId  } = params;

    if(!title || !description){
        throw new Error("News title or description cannot be empty!")
    }

    if (!tourId || !matchId || !sportId) {
        throw new Error('Missing any required parameter: (tourId, matchId, sportId)');
    }

    return News.createNews(params);
}

module.exports = {
    getNewsByMatchId: getNewsByMatchId,
    getNewsByTourId: getNewsByTourId,
    getNewsBySportId: getNewsBySportId,
    createNews: createNews
}