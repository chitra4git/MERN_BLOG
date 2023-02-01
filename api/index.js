const express = require('express');
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const categoryRoute = require("./routes/categories");
const multer = require("multer");
const path = require ("path");
// const PORT = 5000;

dotenv.config();

app.use(express.json());  

console.log("hi can you print")

app.use("/images", express.static(path.join(__dirname, "/images")));


const PORT  = process.env.PORT || 5000;

//this setup helps to not get any warning in the console.

mongoose.set('strictQuery', true);  

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));




// mongoose.set("strictQuery", true);

// mongoose.connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,    
//   })
//   .then(console.log("Connected to MongoDB"))
//   .catch((err) => console.log(err));

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });


app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);



// app.listen(PORT, ()=>{
//     console.log("Server is running..");
// })


