import mongoose from "mongoose";

async function ConnectDB(){
    if(mongoose.connections[0].readyState) {
        return
    }
    mongoose.set("strictQuery", false)
    await mongoose.connect(`${process.env.NEXT_PUBLIC_MONGO_URI}`)
    console.log("connected to data base |||")
}

export default ConnectDB;   