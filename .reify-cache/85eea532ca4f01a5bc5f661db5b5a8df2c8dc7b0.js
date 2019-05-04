"use strict";var express;module.link('express',{default(v){express=v}},0);var request;module.link('supertest',{default(v){request=v}},1);var loansRoute;module.link('../api/routes/loans.mjs',{default(v){loansRoute=v}},2);var testLoan;module.link('../api/models/dummyloans.mjs',{testLoan(v){testLoan=v}},3);




const app = express();
app.use(express.json());

app.use('/api/v1/loans', loansRoute);

// const testLoan = {
//   status: 200,
//     data: {
//       id: 'QK-588A979LL3M',
//       user: 'job@gmail.com',
//       createdOn: 1556793783791,
//       status: 'pending',
//       repaid: false,
//       tenor: 50,
//       amount: 1200.7,
//       paymentInstallment: 10.6,
//       balance: 300,
//       interest: 15
//     }
// }

describe('Test get method for all loans', function() {
    it('test response status', function(done) {
        request(app)
        .get('/api/v1/loans')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
});

describe('POST /users', function() {
  it('responds with json', function(done) {
    request(app)
      .post('/api/v1/loans')
      .send(testLoan)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});

// describe('POST /user', function() {
//   it('user.name should be an case-insensitive match for "john"', function(done) {
//     request(app)
//       .post('/api/v1/loans')
//       .send(loan) // x-www-form-urlencoded upload
//       .set('Accept', 'application/json')
//       // .expect(function(res) {
//       //   res.body.id = 'QK-588A979LL3M';
//       //   // res.body.name = res.body.name.toLowerCase();
//       // })
//       .expect(200, {
//         status: 1
//         // name: 'john'  
//       }, done);
//   });
// });
