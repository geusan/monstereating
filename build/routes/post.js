'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _post = require('../models/post');

var _post2 = _interopRequireDefault(_post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

//create 글 생성
router.post('/create', function (req, res) {

    _post2.default.save(function (err) {
        if (err) throw err;
        return res.json({ success: true });
    });
});

//read 내용 가져오기
router.post('/read', function (req, res) {
    _post2.default.findOne({ _id: req.body.id }).exec(function (err, docs) {
        if (err) throw err;
        return res.json(docs);
    });
});

//get Post list 목록가져오기
router.get('/all', function (req, res) {
    _post2.default.find().exec(function (err, docs) {
        if (err) throw err;
        return res.json(docs);
    });
});

//update 수정하기
router.post('/update', function (req, res) {
    _post2.default.findByIdUpdate(req.body.id, { $set: {
            title: req.body.title,
            content: req.body.content
        } }, { new: true }, function (err, docs) {
        if (err) return res.status(500).json({ error: err });
        return res.json({ success: true });
    });
});

//delete 삭제하기
router.post('/delete', function (req, res) {
    _post2.default.findByIdRemove(req.body.id, function (err, docs) {
        if (err) return res.status(500).json({ error: err });
        return res.json({ success: true });
    });
});

exports.default = router;