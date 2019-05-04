"use strict";var express;module.link('express',{default(v){express=v}},0);var request;module.link('supertest',{default(v){request=v}},1);var loansRoute;module.link('../api/routes/loans.mjs',{default(v){loansRoute=v}},2);



const app = express();
app.use(express.json());

app.use('/api/v1/loans', loansRoute);


describe('Test get method for all loans', function() {
    it('test response status', function(done) {
        request(app)
        .get('/api/v1/loans')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

// describe('error', function() {
//   it('test eror status', function(done) {
//       request(app)
//       .get('/api/v1/loan')
//       .set('Accept', 'application/json')
//       .expect(404, done);
//   });
// });
const loan = {
  
    status: 200,
    data: {
      id: 'QK-588A979LL3M',
      user: 'job@gmail.com',
      createdOn: 1556793783791,
      status: 'pending',
      repaid: false,
      tenor: 50,
      amount: 1200.7,
      paymentInstallment: 10.6,
      balance: 300,
      interest: 15
    }
}

describe('POST /users', function() {
  it('responds with json', function(done) {
    request(app)
      .post('/api/v1/loans')
      .send(loan)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
