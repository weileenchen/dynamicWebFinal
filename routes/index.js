const express = require("express");

const router = express.Router();

const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get("/", (req, res) => {
  const posts = firestore.getDocs(firestore.collection(db, "posts"));

  const postsArray = [];

  posts
    .then((response) => {
      response.forEach((doc) => {
        const docData = doc.data();
        docData.id = doc.id;
        postsArray.push(docData);
      });
      return res.send(postsArray);
    })
    .catch(function (error) {
      return res.send(error);
    });
});

module.exports = router;
