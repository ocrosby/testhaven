import pkg from 'supertest';
const { request } = pkg;

const app = require('../../app'); // Your Express app

import { expect } from 'chai';
import { describe, it } from 'mocha';


describe('GET /', function() {
    it('responds with json', function(done) {
        request(app)
            .get('/')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                expect(res.body).to.be.an('array');
                done();
            });
    });
});