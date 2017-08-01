import express from 'express';
import Food from '../models/food';
import mongoose from 'mongoose';

const router = express.Router();

router.post("/newFood", (req,res) => {
    
    let food = new Food({
        name: req.body.name,
        ingredient: req.body.ingredient
    });
    
    food.save((err,docs) => {
            if(err) throw err;
            return res.json({"result":"success"});
        });
    
});

router.get("/allFood", (req,res) => {
    Food.find().exec((err, docs) => {
        if(err) throw err;
        console.log(docs);
        return res.json(docs);
    });
});


export default router;