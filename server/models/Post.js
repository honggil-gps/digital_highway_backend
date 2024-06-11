const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const db = mongoose.connection.useDb('community')

// myPage 스키마
const PostSchema = new mongoose.Schema({
  // 글 제목
  title: {
    type: String,
    required: true,
  },

  // 글 내용
  mainText: {
    type: String,
    required: true,
  },

 // 댓글 내용
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
    },
  ],


  // 작성자
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },


  // 작성한 시간
  createdAt: {
    type: Date,
    default: Date.now,
  },


  // 조회수
  views: {
    type: Number,
    default: 0,
  },


  // 좋아요 추천
  ups: {
    type: Number,
    default: 0,
  },


  // 싫어요 비추천
  downs: {
    type: Number,
    default: 0,
  },
});

const Post = db.model("Post", PostSchema);

module.exports = Post;
