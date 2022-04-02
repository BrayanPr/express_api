const express = require('express');
const PostModel = require("../Models/posts");
const router = express.Router();

router.get('',(req, res, next) => {
    res.status(200).json({model:PostModel.find(req.body.id)});
})

router.post('',(req, res, next) => {
    const post = new PostModel({
        title: req.body.title,
        content: req.body.content
    })
    post.save().then( createdPost => {
        console.log(createdPost._id);
        res.status(200).json({
            message: "Post added successfully",
            postId:createdPost._id
        });
    })
})

module.exports = router