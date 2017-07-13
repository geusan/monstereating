import express from 'express';
import Post from '../models/post';

const router = express.Router();

//create 글 생성
router.post('/create', (req,res) => {
    
    Post.save( err => {
            if(err) throw err;
            return res.json({ success: true });
        });
   
});

//read 내용 가져오기
router.post('/read', (req,res) => {
    Post.findOne({_id:req.body.id}).exec((err,docs) => {
        if(err) throw err;
        return res.json(docs); 
    });
});

//get Post list 목록가져오기
router.get('/all', (req,res) => {
   Post.find().exec((err,docs) => {
      if(err) throw err;
      return res.json(docs);
   });
});

//update 수정하기
router.post('/update', (req,res) => {
   Post.findByIdUpdate(
       req.body.id,
       {$set: {
           title: req.body.title,
           content: req.body.content
       }},
       {new: true},
       (err,docs) => {
           if(err) return res.status(500).json({error: err});
           return res.json({success: true});
       }) 
});

//delete 삭제하기
router.post('/delete', (req,res) => {
    Post.findByIdRemove(
        req.body.id,
        (err,docs) => {
            if(err) return res.status(500).json({error:err});
            return res.json({success:true});
        })
});

export default router;