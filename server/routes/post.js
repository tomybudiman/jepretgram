const router=require("express").Router();
const PostControl=require("../controllers/post-control");

router.post("/new",PostControl.add);

module.exports=router;
