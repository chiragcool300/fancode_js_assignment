const bodyParser = require('body-parser');
const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news/match').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByMatchId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsByTourId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport').get(async (req, res, next) => {
        try {
            let params = req.query;
            let result = await News.getNewsBySportId(params);
            return res.json(result);
        } catch (err) {
            return next(err);
        }
    });

    app.post('/news/create', bodyParser.json(),  (req, res) => {
        try {
            let body = req.body;
            News.createNews(body);
            return res.status(201).json({
                message: 'News added successfully!'
            });
        } catch (err) {
            console.log(err.message);
            return res.status(500).json({
                message: err.message
            });
        }
    });
}