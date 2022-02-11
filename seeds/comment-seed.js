const { Comment } = require("../models")

const commentData = [
    {
        comment_text:"test",
        user_id:2,
        project_id:2
    }
]

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;