const router=require("express").Router();
const UserControl=require("../controllers/user-control");

router.post("/signin",UserControl.signin);
router.post("/signup",UserControl.signup);

module.exports=router;
