'use strict';

import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/',(req,res,next) => {
  res.render('index', {title: 'Express'});
});

router.post('/webhook',(req,res,next) => {
  res.send({success: true, req: req.body});
});

router.get('/hello',(req,res,next) => {
  res.send({success: true});
});

export default router;