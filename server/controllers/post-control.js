const Post=require("../models/post-model");
const jwt=require("jsonwebtoken");

module.exports={
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
  }
};
