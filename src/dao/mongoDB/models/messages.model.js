import mongoose from "mongoose";

const messageCollection = 'messages';

const messageSchema = new mongoose.Schema({
        name: String,

});

const messageModel = mongoose.model(messageCollection, messageSchema);

export default messageModel;
