const request = require('supertest');
const app = require('../app');
const nock = require('nock');
var requesty = require('request');

let scope;
beforeEach(() => {
  let count = 0;

  try {
    scope = nock('http://google.com:5')
      .get('/')
      .reply(200, (uri, requestBody) => {
        count++;
        console.log(`url has been accessed: ${count} times`);
      });
  } catch (error) {
    console.log(error);
  }
});

describe('POST /', function() {
  it('responds with json', function(done) {
    this.timeout(60000);

    request(app)
      .post('/')
      .send({ ip: 'google.com' })
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);

        console.log(res);
        done();
      });
  });
});
