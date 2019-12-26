'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
router.get('/', (req, res, next) => {
    res.render('index', { title: 'Express' });
});
router.post('/webhook', (req, res, next) => {
    res.send({ success: true, req: req.body });
});
router.get('/hello', (req, res, next) => {
    res.send({ success: true });
});
exports.default = router;
//# sourceMappingURL=index.js.map