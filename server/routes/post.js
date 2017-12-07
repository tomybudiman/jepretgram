const router=require("express").Router();
const PostControl=require("../controllers/post-control");

// All post
router.get("/",PostControl.all);
// Add post
router.post("/",PostControl.add);
// Add reaction
router.post("/:id",PostControl.vote);

module.exports=router;
