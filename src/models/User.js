import { Schema, model, models } from "mongoose";


const userSchema = new Schema({
    name : {
        type: String, 
        unique: false,
        required: [true, "Please provide a name"]
    },
    email : {
        type: String, 
        unique: [true, 'User exists already'],
        required: [true, "Please provide email"]
    },
    password: {
        type: String,
        required: [true, "Please provide a password"]
    }
}) 

const User = models.User || model("User", userSchema);

export default User

