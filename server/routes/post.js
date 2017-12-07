const router=require("express").Router();
const PostControl=require("../controllers/post-control");

// All post
router.get("/",PostControl.all);
// Add post
router.post("/",PostControl.add);
// Add reaction
router.post("/:id",PostControl.vote);
// Remove post
router.delete("/:id",PostControl.delete);
// Edit caption
router.put("/:id",PostControl.update);

module.exports=router;
