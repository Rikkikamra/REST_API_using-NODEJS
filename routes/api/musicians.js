const express = require('express');
const router = express.Router();
const musicianSchema = require("../../models/musicianSchema")

router.get('/', (req,res) => {
    musicianSchema.find({}, function(err, result) {
        if (err) throw err;
        res.status(200).json(result) 
    });
});

router.get('/:id', (req,res) => {
    const id = req.params.id;
    musicianSchema.findOne({id}, function(err, result) {
        if (err){
            res.status(400).json({
                error: err
            })
        }
        else{
            if(result){
                res.status(200).json(result)
            }
            else{
                res.status(400).json({
                    error: "No such Musician"
                })
            }
        }
    });
});

module.exports = router