const app=require("express")();
const mongoose=require("mongoose");
const env=require("dotenv").config();
const bodyParser=require("body-parser");

mongoose.connect(process.env.DB_URL);
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const post=require("./routes/post");
app.use("/post",post);

app.listen(process.env.PORT,()=>{
  console.log(`Server started on port ${process.env.PORT}`);
});
