import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        required: true
    },
    userName:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    gender:{
        type: String,
        required: true,
        enum: ["male", "female"] // enum is used when you want certain values from which it should be selected.
    },
    profilePic:{
        type: String,
        default:""
    },
    // createdAt , updatedAt => Member since <createdAt>
},
    {timestamps: true}
);

const User = mongoose.model("User",userSchema);
export default User;