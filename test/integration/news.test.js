const request = require('supertest');
const { app } = require('../../index');

describe('Integration Tests', () => {
  let server;

  beforeAll((done) => {
    server = app.listen(done);
  });

  afterAll((done) => {
    server.close(done);
  });

    it('should return all the news by sportId', async () => {
      const response = await request(server).get('/news/sport?id=1');
      expect(response.body.size()).toBe(4);
      expect(response.status).toBe(200);
    });

    it('should return all the news by matchId', async () => {
      const response = await request(server).get('/news/match?id=1');
      expect(response.body.size()).toBe(1);
      expect(response.status).toBe(200);
    });

    it('should return all the news by tourtId', async () => {
      const response = await request(server).get('/news/tour?id=4');
      expect(response.body.size()).toBe(1);
      expect(response.status).toBe(200);
    });


    it('should create news', () => {
      const response = request(server).post(
           '/news/create',
           {
                json: {
                           "title": "Indian Premier League (IPL) 2023",
                           "description": "Indian Premier League, 2023, MI vs CSK match on 22nd April 2023 6pm onwards",
                           "tourId": 1,
                           "matchId": 15,
                           "sportId": 1
                       }
           },
           function (error, response, body) {
               if (!error && response.statusCode == 200) {
                   console.log(body);
               }
           }
       );
      expect(response.status).toBe(201);
    });


});