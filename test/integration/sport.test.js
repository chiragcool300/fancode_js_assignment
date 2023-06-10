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

  it('should return a all the matches for the sport and tours', async () => {
    const response = await request(server).get('/sport/tour/match');
    res.body.error.should.equal(false);
    expect(response.status).toBe(200);
  });
});