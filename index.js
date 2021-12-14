const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

// Firebase code
const firebase = require("firebase/app");
// config object communicates with firebase
const firebaseConfig = {
  apiKey: "AIzaSyAkkahIbytMadzLjxfxa76YC1MxLJ0jIZU",
  authDomain: "final-project-8013e.firebaseapp.com",
  projectId: "final-project-8013e",
  storageBucket: "final-project-8013e.appspot.com",
  messagingSenderId: "530777830587",
  appId: "1:530777830587:web:972b9153772319523d259e",
};

firebase.initializeApp(firebaseConfig);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

const indexRoute = require("./routes/index");
const createPostRoute = require("./routes/createPost");
const singlePostRoute = require("./routes/singlePost");

app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/post", singlePostRoute);

app.listen(port, () => {
  console.log(`Example app listening at localhost ${port}`);
});
