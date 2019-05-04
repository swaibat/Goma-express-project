"use strict";var express;module.link('express',{default(v){express=v}},0);var request;module.link('supertest',{default(v){request=v}},1);var usersRoute;module.link('../api/routes/users',{default(v){usersRoute=v}},2);



const app = express();
app.use(express.json());

app.use('/api/v1/users', usersRoute);


describe('Test get method users', function() {
    it('test response status', function(done) {
        request(app)
        .get('/api/v1/users/auth/signup')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});
