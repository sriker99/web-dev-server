import mongoose from "mongoose";
const schema=mongoose.Schema({
    topic: String,
    postedBy: {
        username: String
    },
    liked: Boolean,
    verified: Boolean,
    handle: String,
    title: String,
    time: String,
    logo_image: String,
    avatar_image: String,
    tuits: String,
    tuit:String,
    stats: {
        comments: Number,
        retuits: Number,
        likes: Number,
        dislikes:Number
    }
},{collection:'tuits'});
export default schema;