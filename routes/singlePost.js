const express = require("express");

// Middleware to allow for routing on the node server
const router = express.Router();

const firestore = require("firebase/firestore");
// Initialize Firestore database
const db = firestore.getFirestore();

router.get("/:id", (req, res) => {
  const postId = req.params.id;
  const post = firestore.getDoc(firestore.doc(db, "posts", postId));

  post
    .then((response) => {
      const post = response.data();
      if (post) return res.send(post);
      return res.send({ postMessage: `No doc... sorry` });
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
