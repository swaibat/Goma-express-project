"use strict";var express;module.link('express',{default(v){express=v}},0);var request;module.link('supertest',{default(v){request=v}},1);var usersRoute;module.link('../api/routes/users.mjs',{default(v){usersRoute=v}},2);



const app = express();
app.use(express.json());

app.use('/api/v1/users', usersRoute);


describe('POST /users', function() {
    it('responds with json', function(done) {
      request(app)
        .post('/api/v1/users')
        .send({name: 'john'})
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          done();
        });
    });
  });

