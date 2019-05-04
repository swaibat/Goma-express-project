"use strict";var express;module.link('express',{default(v){express=v}},0);var request;module.link('supertest',{default(v){request=v}},1);var usersRoute;module.link('../api/routes/users',{default(v){usersRoute=v}},2);var testdata;module.link('../api/models/dummyUsers',{testdata(v){testdata=v}},3);




const app = express();
app.use(express.json());

app.use('/api/v1/users', usersRoute);


// describe('POST /users', function() {
//     it('responds with json', function(done) {
//       request(app)
//         .post('/api/v1/users/auth/signup')
//         .send(testdata)
//         .set('Accept', 'application/json')
//         .expect('Content-Type', /json/)
//         .expect(200)
//         .end(function(err, res) {
//           if (err) return done(err);
//           done();
//         });
//     });
//   });

  describe('POST /user', function() {
    it('user.name should be an case-insensitive match for "john"', function(done) {
      request(app)
        .post('/api/v1/users/auth/signup')
        .send(testdata) // x-www-form-urlencoded upload
        .set('Accept', 'application/json')
        .expect(200,done);
    });
  });