"use strict";var express;module.link('express',{default(v){express=v}},0);var inputValidator,checkUserExists,postData;module.link('../midleware/auth',{inputValidator(v){inputValidator=v},checkUserExists(v){checkUserExists=v},postData(v){postData=v}},1);




const router = express.Router();


// signup route
router.post('/auth/signup',inputValidator,checkUserExists,postData);


module.exportDefault(router);
