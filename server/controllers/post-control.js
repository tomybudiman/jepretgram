const Post=require("../models/post-model");
const ObjectId=require("mongodb").ObjectID;
const jwt=require("jsonwebtoken");

module.exports={
  all:(req,res)=>{
    Post.find().sort({"_id":-1}).then((posts)=>{
      res.send({status:true,msg:posts});
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  },
  add:(req,res)=>{
    const userId=jwt.verify(req.headers.token,process.env.SECRET_TOKEN).id;
    new Post({
      UserId:userId,
      imageUrl:req.body.image,
      caption:req.body.caption
    }).save().then((response)=>{
      res.send({status:true,msg:response});
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  },
  vote:(req,res)=>{
    const userId=jwt.verify(req.headers.token,process.env.SECRET_TOKEN).id;
    Post.findOne({
      "_id":ObjectId(req.params.id)
    }).then((response)=>{
      if(response == null){
        res.send({status:false,msg:"Post not found!"});
      }else{
        const check=response.likes.filter((like)=>{return like == userId});
        if(check.length > 0){
          response.likes.splice(response.likes.indexOf(userId),1);
          Post.updateOne({
            "_id":ObjectId(req.params.id)
          },{
            likes:response.likes
          }).then((like)=>{
            res.send({status:true,msg:like});
          });
        }else{
          response.likes.push(userId);
          Post.updateOne({
            "_id":ObjectId(req.params.id)
          },{
            likes:response.likes
          }).then((like)=>{
            res.send({status:true,msg:like});
          });
        }
      }
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  },
  update:(req,res)=>{
    Post.updateOne({
      "_id":ObjectId(req.params.id)
    },{
      caption:req.body.caption
    }).then((response)=>{
      res.send({status:true,msg:response});
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  },
  delete:(req,res)=>{
    Post.deleteOne({
      "_id":ObjectId(req.params.id)
    }).then((response)=>{
      res.send({status:true,msg:response});
    }).catch((err)=>{
      res.send({status:false,msg:err});
    });
  }
};
