import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema({
    numbers: {
        type: Array
    },
    message : {
        type: String
    }},
    {
        timestamps: true
    }
);

const Conversation = mongoose.model('Conversation', ConversationSchema); // Fix capitalization and remove extra space

export default Conversation; // Ensure it's a default export