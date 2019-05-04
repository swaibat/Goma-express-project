"use strict";var express;module.link('express',{default(v){express=v}},0);var request;module.link('supertest',{default(v){request=v}},1);

// import loansRoute from './api/routes/loans.mjs'

const app = express();
app.use(express.json());

// app.use('/api/v1/loans', loansRoute);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

// app.post('/user', function(req, res) {
//   let user = {
//     name: req.body.name
//   }
// });

describe('GET /user', function() {
    it('responds with json', function(done) {
        request(app)
        .get('/user')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

