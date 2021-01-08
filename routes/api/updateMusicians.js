const express = require('express');
const router = express.Router();
const musicianSchema = require("../../models/musicianSchema")
const yup = require('yup');

router.put('/:id',async function(req,res) {
    const validBody = yup.object().shape({
        firstName: yup.string().max(50).required(),
        lastName: yup.string().max(50).required(),
        genre: yup.string().matches(/(JAZZ|BLUES|ROCK)/, { excludeEmptyString: true })
    })
    try {
        const validatedBody = await validBody.validate(req.body);
        const query = {"id":req.params.id};
        console.log(validatedBody);
        musicianSchema.findOneAndUpdate(query,validatedBody,function(err,docs){
            if(err){
                res.status(400).json({
                    errorMessage: err
                })
            }
            else{
                if(docs){
                    res.status(200).json({
                        updatedId: req.params.id
                    })
                }
                else{
                    res.status(400).json({
                        errorMessage: "No Such Musician"
                    })  
                }
            }
        })
    }
    catch(err){
        res.status(400).json({
            errorMessage: err
        })
    }
})

module.exports = router