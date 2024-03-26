import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const {message} = req.body;    // get message from user
        const {id:receiverId} = req.params;   // we will get receiver id from here
        const senderId = req.user._id;    // we will get sender id from here

       let  conversation =  await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {                                    // if conversation does not exist then create one
            conversation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({                      //we created a new message
            senderId, 
            receiverId,
            message,
        })

        if(newMessage){                       // we put the messages array into the conversation
            conversation.messages.push(newMessage._id);
        }
        // await conversation.save();: 1 second
        // await newMessage.save();: Then 2 seconds
        // below one will run in parallel
        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(201).json(newMessage);            // send it as a response

    } catch (error) {
        console.log("Error in sendMessage controller:", error.message);
        res.status(500).json({error:"Internal Server Error💀"});
    }
};

export const getMessages = async (req, res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;  

        const conversation = await Conversation.findOne({
            participants: {$all: [senderId, userToChatId] },
        }).populate("messages");  // Not References but Actual Methods

        if (!conversation) return res.status(200).json([]);
        const messages = conversation.messages;

        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages controller:", error.message);
        res.status(500).json({error:"Internal Server Error💀"});
    }
};