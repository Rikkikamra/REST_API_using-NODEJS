import musData from '../../src/musicians'
import { getSongs } from '../../src/songs'
const express = require('express');
const router = express.Router();
const musician = require('../../models/musicianSchema')

router.get('/', async function(req,res){
    // var songData = await getSongs("ella")
    var musId = Object.keys(musData);
    // console.log(Object.keys(musData))
    console.log(musId)
    for(let i=0;i<musId.length;i++){
        let id = musId[i]
        var songData = await getSongs(id).catch((err) => console.log("caught"));
        if(!songData){
            songData = []
        }
        // console.log(id)
        // console.log(musData[id])
        musician.findOne({id}).then(firstName =>{
            if(firstName)
            {
                console.log("Musician Exist");
            } 
            else {
                // console.log(musData[id]["firstName"]);
                const newMusician = new musician({
                    id,
                    firstName: musData[id]["firstName"],
                    lastName: musData[id]["lastName"],
                    genre: musData[id]["genre"],
                    songs: songData
                })
                console.log(newMusician)
                newMusician
                    .save()
                    .then(result => {
                        console.log(result)
                    })
                    .catch(err => console.log(err))
            }
        })
    }
    res.status(200).send("Inserted Data")
    // console.log(typeof musData)
    
});

module.exports = router