import Conversation from "../model/Conversation.js";

export const newConversation = async (request, response) => {
    try {
        const senderId = request.body.senderId;
        const receiverId = request.body.receiverId;

        // Check if conversation already exists
        const exist = await Conversation.findOne({ members: { $all: [senderId, receiverId] }});

        if (exist) {
            return response.status(200).json('Conversation already exists.');
        }

        // Create new conversation
        const newConversation = new Conversation({
            members: [senderId, receiverId]  // Add senderId and receiverId to members array
        });

        await newConversation.save();  // Save conversation
        return response.status(200).json('Conversation saved successfully ')

    } catch (error) {

    }
};
