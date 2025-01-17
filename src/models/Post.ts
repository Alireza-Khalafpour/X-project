import { Schema , model , models } from "mongoose";

const NewPostSchema = new Schema({

    desc:{
        required: true,
        type: String,
    },
    media:{
        required: true,
        type: Buffer<ArrayBufferLike>,
    },
    createdAt:{
        type: Date,
        default: () => Date.now(),
        immutable: true,
    }
})

const Post = models.Post || model('Post' , NewPostSchema)

export default Post;