import User from "../models/user.model.js";

export const getUsersforSidebar = async (req,res) => {
    try {
        
        const loggedInUserId = req.user._id;           // Get data in sidebar of all logged in users

        const filteredUsers = await User.find({_id: {$ne: loggedInUserId}}).select("-password");  
        // No password in Array should be shown when we send get users 
        // We dont want to send messages to ourselves to find all users accept login-user.
        // If you want to send messages to yourself remove {_id: {$ne: loggedInUserId}}
                            
        res.status(200).json(filteredUsers);

    } catch (error) {
        console.log("Error in getUsersforSidebar:", error.message)
        res.status(500).json({error:"Internal Server Error💀"}) ;
    }
};