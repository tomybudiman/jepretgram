const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const postSchema=new Schema({
  UserId:{
    type:Schema.Types.ObjectId,
    ref:"User"
  },
  imageUrl:String,
  caption:String,
  likes:[{
    type:Schema.Types.ObjectId,
    ref:"User"
  }],
  createdAt:{
    type:Date,
    default:new Date()
  }
});
const Post=mongoose.model("Post",postSchema);

module.exports=Post;
