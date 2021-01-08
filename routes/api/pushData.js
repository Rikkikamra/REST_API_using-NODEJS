import musData from '../../src/musicians'
import { getSongs } from '../../src/songs'
const express = require('express');
const router = express.Router();
const musician = require('../../models/musicianSchema')

router.get('/', async function(req,res){
    var musId = Object.keys(musData);
    console.log(musId)
    for(let i=0;i<musId.length;i++){
        let id = musId[i]
        var songData = await getSongs(id).then((sngData) =>{
            insertMusic(id,musData,sngData);
        }).catch((err) => insertMusic(id,musData,[]));
    }
    res.status(200).send("Inserted Data")
    
});

function insertMusic(id,musData,sngData){
    musician.findOne({id}).then(musicRecd =>{
        if(musicRecd)
        {
            console.log(musicRecd);
        } 
        else {
            // console.log(sngData);
            const newMusician = new musician({
                id,
                firstName: musData[id]["firstName"],
                lastName: musData[id]["lastName"],
                genre: musData[id]["genre"],
                songs: sngData
            })
            // console.log(newMusician)
            newMusician
                .save()
                .then(result => {
                    console.log(result)
                })
                .catch(err => console.log(err))
        }
    })
}

module.exports = router