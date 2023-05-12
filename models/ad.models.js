const mongoose = require("mongoose")

const adSchema = mongoose.Schema({

    companyId:{
        type: Number,
        required: true
    },
    primaryText:{
        type: String,
        required: true
    },
    headline:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    CTA:{
        type: String,
        required: true
    },
    imageUrl:{
        type: String,
        required: true
    },
    companies:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    },


},{
    versionKey:false
});

const AdModel = mongoose.model("Ad",adSchema)
module.exports={AdModel}
