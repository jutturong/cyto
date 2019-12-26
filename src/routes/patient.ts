'use strict';

import * as express from 'express';
import { PatientModel } from "../models/PatientModel";

const router = express.Router();
const model = new PatientModel();

router.get('/list', async (req,res,next) => {
  let data = await model.list(req.db);
  res.send({success: true, data: data});
});

router.get('/view/:id', async (req,res,next) => {
    try {
        let id = req.params.id; 
        let result = await model.view(req.db, id);
        res.send({success: true, results: result[0]});
    } catch (error) {
        res.send({success: false, error: error});
    } 
});

router.post('/create', async (req,res,next) => {
    try {
        let data = req.body.data;
        let result = await model.create(req.db, data);
        res.send({success: true, reults: result});
    } catch (error) {
        res.send({success: false, error: error});
    } 
});

router.put('/update/:id', async (req,res,next) => {
    try {
        let id = req.params.id; 
        let data = req.body.data;
        let result = await model.update(req.db, id, data);
        res.send({success: true, reults: result});
    } catch (error) {
        res.send({success: false, error: error});
    } 
});

router.delete('/delete/:id', async (req,res,next) => {
    try {
        let id = req.params.id; 
        let result = await model.delete(req.db, id);
        res.send({success: true, reults: result});
    } catch (error) {
        res.send({success: false, error: error});
    } 
});

router.delete('/deletes', async (req,res,next) => {
    try {
        let ids = req.query.ids.split(','); 
        let result = await model.deletes(req.db, ids);
        res.send({success: true, reults: result});
    } catch (error) {
        res.send({success: false, error: error});
    } 
});

export default router;