const app=require("express")();
const mongoose=require("mongoose");
const env=require("dotenv").config();
const bodyParser=require("body-parser");
const cors=require("cors");

mongoose.connect(process.env.DB_URL);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors());

const user=require("./routes/user");
app.use("/user",user);

const post=require("./routes/post");
app.use("/post",post);

app.listen(process.env.PORT,()=>{
  console.log(`Server started on port ${process.env.PORT}`);
});
