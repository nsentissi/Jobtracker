import mongoose, { Mongoose } from "mongoose";


const connect = async () => {

    if(mongoose.connection.readyState === 1) {
        console.log("MongoDB is already connected");
        return 
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log(`MongoDB connected: ${Mongoose.connection.name}`)
    } catch (error) {
        console.error(`MongoDB connection : ${Mongoose.connection.name}`)
    }
}

export default connect