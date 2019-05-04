"use strict";var express;module.link('express',{default(v){express=v}},0);var short;module.link('short-uuid',{default(v){short=v}},1);var loans;module.link('../models/dummyloans.mjs',{loans(v){loans=v}},2);



const router = express.Router();


// post loan application
router.post('/',(req, res) => {
  // post the loan
  const loan = {
    status: 1,
    data: {
      id: short.generate(),
      user: req.body.user,
      createdOn: Date.now(),
      status: 'pending',
      repaid: false,
      tenor: req.body.tenor,
      amount: req.body.amount,
      paymentInstallment: (req.body.amount + req.body.interest) / req.body.tenor,
      balance: 63,
      interest: (15 / 100) * req.body.amount,
    },
  };

  loans.push(loan);
  res.status(201).send(loan);
});

// Get a specific loan application.
router.get('/',(req, res) => {
    res.send(loans);
  }
);

// Get a specific loan application
router.get('/:id',(req, res) => {
  const loan = loans.find(a => a.data.id === req.params.id);
    res.send(loan);
  }
);


// Get all repaid loans.
// Endpoint: GET /loans?status=approved&repaid=false
// Get all current loans that are not fully repaid.

// router.get('/', (req, res, next) => {
//   const result = loans.filter(a => a.data.status === req.query.status );
  
//   // result.forEach(function(element) {
//   //   if (Boolean(element.data.repaid)== Boolean(false)){
//   //       res.send(element);
//   //   }})
//   // var a = 0;
//   // for (const a in result) {
//   //   if (result[a].data.repaid === Boolean(req.query.repaid)){
//   //     console.log(result[a]);
//   //   }
//   // }

//   next();
//   })



module.exportDefault(router);
