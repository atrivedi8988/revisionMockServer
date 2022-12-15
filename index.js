const express = require('express');
const mongoose = require("mongoose")
const cors = require("cors")
const userRouter = require("./Router/user.router");
const productRouter = require("./Router/product.router")

const app = express()

// app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors())

app.use("/user", userRouter);
app.use("/product", productRouter )

// app.get('/',(req,res) => res.send('hello'));
mongoose.set('strictQuery', true);
mongoose
  .connect(
    "mongodb+srv://aman:amantrivedi@cluster0.ddklfbc.mongodb.net/EMI"
  )
  .then(() => {
    app.listen(8080, (req, res) => {
      console.log("you sever started on http://localhost:8080");
    });
  });


