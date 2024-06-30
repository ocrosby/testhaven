const request = require('supertest');
const app = require('../../app'); // Your Express app
const expect = require('chai').expect;

describe('GET /users', function() {
    it('responds with json', function(done) {
        request(app)
            .get('/users')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) {
                    return done(err);
                }

                expect(res.body).to.be.an('array');

                done();
            });
    });
});