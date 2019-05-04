"use strict";var express;module.link('express',{default(v){express=v}},0);var request;module.link('supertest',{default(v){request=v}},1);var usersRoute;module.link('../api/routes/users.mjs',{default(v){usersRoute=v}},2);



const app = express();
app.use(express.json());

app.use('/api/v1/users', usersRoute);


describe('Test get method users', function() {
    it('test response status', function(done) {
        request(app)
        .get('/api/v1/users')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

// describe('Test get method users', function() {
//     it('test response status', function(done) {
//         request(app)
//         .patch('/api/v1/users/:email/verify')
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200, done);
//     });
// });
describe('POST /user', function() {
    it('user.name should be an case-insensitive match for "john"', function(done) {
      request(app)
        .post('/api/v1/users/:email/verify')
        .send('status=verified') // x-www-form-urlencoded upload
        .set('Accept', 'application/json')
        .expect(function(res) {
          res.body.id = 'some fixed id';
          res.body.name = res.body.name.toLowerCase();
        })
        .expect(200, {
          id: 'some fixed id',
          name: 'john'
        }, done);
    });
  });

