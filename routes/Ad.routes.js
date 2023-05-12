const express = require("express")
const { AdModel } = require("../models/ad.models")
const adRouter = express.Router()



adRouter.post("/add",async(req,res)=>{
    const payload = req.body
    try{
        const ad = new AdModel(payload)
        await ad.save()
        res.status(201).json(ad)
    }catch(err){
        res.status(200).json({"msg":err.msg})
    }
})

adRouter.get("/all",async(req,res)=>{
  const ads = await AdModel.find({})
  res.status(200).json(ads)
  })




adRouter.get("/search", async (req, res) => {
  const { q } = req.query;
  try {
    const ads = await AdModel.aggregate([
      {
        $match: {
          $or: [
            { companies:{$regex: new RegExp(q,"i")}},
            { primaryText:{$regex: new RegExp(q,"i")}},
            { headline:{$regex: new RegExp(q,"i")}},
            { description:{$regex: new RegExp(q,"i")}},
          ],
        },
      },
    ]);
    res.status(200).send(ads);
  } catch (err) {
    console.error(err);
    res.status(500).send("Internal Server Error");
  }
});



module.exports={adRouter}