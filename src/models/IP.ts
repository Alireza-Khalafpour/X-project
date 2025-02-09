import { Schema , model , models } from "mongoose";

const NewGetIpAddressSchema = new Schema({

    IP:{
        required: true,
        type: JSON || String,
    },
    createdAt:{
        type: Date,
        default: () => Date.now(),
        immutable: true,
    }
})

const GetIpAddress = models.GetIpAddress || model('GetIpAddress' , NewGetIpAddressSchema)

export default GetIpAddress;