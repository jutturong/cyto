'use strict';
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PatientModel_1 = require("../models/PatientModel");
const router = express.Router();
const model = new PatientModel_1.PatientModel();
router.get('/list', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let data = yield model.list(req.db);
    res.send({ success: true, data: data });
}));
router.get('/view/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let result = yield model.view(req.db, id);
        res.send({ success: true, results: result[0] });
    }
    catch (error) {
        res.send({ success: false, error: error });
    }
}));
router.post('/create', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let data = req.body.data;
        let result = yield model.create(req.db, data);
        res.send({ success: true, reults: result });
    }
    catch (error) {
        res.send({ success: false, error: error });
    }
}));
router.put('/update/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let data = req.body.data;
        let result = yield model.update(req.db, id, data);
        res.send({ success: true, reults: result });
    }
    catch (error) {
        res.send({ success: false, error: error });
    }
}));
router.delete('/delete/:id', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        let result = yield model.delete(req.db, id);
        res.send({ success: true, reults: result });
    }
    catch (error) {
        res.send({ success: false, error: error });
    }
}));
router.delete('/deletes', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let ids = req.query.ids.split(',');
        let result = yield model.deletes(req.db, ids);
        res.send({ success: true, reults: result });
    }
    catch (error) {
        res.send({ success: false, error: error });
    }
}));
exports.default = router;
//# sourceMappingURL=patient.js.map