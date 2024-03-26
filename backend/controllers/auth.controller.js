import { response } from "express";
import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req,res) => {                              //  res.send("Signup function"); Return function
 try {
    const {fullName, userName, password, confirmPassword, gender} = req.body;

    if (password !== confirmPassword) {
        return res.status(400).json({error: "Passwords don't match🤡"});    //400 status used when invalid input and passwords are used 
    }

    const user = await User.findOne({userName});                // findOne to check if user is already there in the database
    if(user){
        return res.status(400).json({error: "Username already exists👌"});
    }

    // HASH PASSWORD HERE(BCRYPT JS LIBRARY FOR * PASSWORD)
    const salt = await bcrypt.genSalt(10);       //10= Higher more secure and more higher then it will get slow
    const hashedPassword = await bcrypt.hash(password, salt);
    //https://avatar-placeholder.iran.liara.run/
    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

    const newUser = new User({
        fullName,
        userName,
        password:hashedPassword,
        gender,
        profilePic: gender === "male" ? boyProfilePic :girlProfilePic
    })
    if(newUser) {
        //Generate JWT token here
        generateTokenAndSetCookie(newUser._id, res);
        await newUser.save();

    res.status(201).json({                         // 201 means it has been created
        _id: newUser._id,                          // _id here refers to mongoose object that contains the user object                                   
        fullName: newUser.fullName,
        userName : newUser.userName,
        profilePic: newUser.profilePic
    }) ;
    } else {
        res.status(400).json({error: "Invalid User Data🤦‍♀️"});
    }
} catch (error) {
    console.log("Error in signup controller ", error.message)
    res.status(500).json({error:"Internal Server Error💀"}) ;   // 500 means Internal Server Error 
}                                                           
    
};

export const login =  async (req,res) => {
    try {
        const {userName,password} = req.body;
        const user = await User.findOne({userName});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || ""); // "" means null value entered will not throw us an error
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error: "Invalid Credentials🤔"});
        }
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			userName: user.userName,
			profilePic: user.profilePic,
		});
    } catch (error) {
        console.log("Error in login controller ", error.message)
        res.status(500).json({error:"Internal Server Error💀"}) ;   // 500 means Internal Server Error     
    }
};

export const logout = async (req,res) => {
    try {
        res.cookie("jwt","",{maxAge:0});
        res.status(200).json({message: "Logged Out Successfully🥳"});
    } catch (error) {
        console.log("Error in logout controller ", error.message)
        res.status(500).json({error:"Internal Server Error💀"}) ;       
    }
};