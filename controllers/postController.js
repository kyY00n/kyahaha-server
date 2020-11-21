const { Post, Like, User } = require("../models");
const responseMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");

module.exports = {
  createPost: async (req, res) => {
    const { title, contents, nickname } = req.body;
    console.log(req);
    console.log(req.file);
    const postImageUrl = req.file.location;
    try {
      const user = await User.findOne({ nickname });
      const post = await Post.create({
        title,
        contents,
        postImageUrl,
      });
      await user.addPost(post);
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.CREATE_POST_SUCCESS,
            post,
          ),
        );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.BAD_REQUEST)
        .send(
          util.fail(statusCode.BAD_REQUEST, responseMessage.CREATE_POST_FAIL),
        );
    }
  },
  readAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll({
        attributes: ["title", "contents", "postImageUrl"],
      });
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.READ_POST_ALL_SUCCESS,
            posts,
          ),
        );
    } catch (error) {
      console.log(error);
      res
        .status(statusCode.BAD_REQUEST)
        .send(
          util.fail(statusCode.BAD_REQUEST, responseMessage.READ_POST_ALL_FAIL),
        );
    }
  },
  toggleLike: async (req, res) => {
    const PostId = req.params.postId;
    const UserId = req.body.userId;

    try {
      const alreadyLike = await Like.findOne({ where: { PostId, UserId } });
      if (alreadyLike) {
        await Like.destroy({ where: { PostId, UserId } });
        return res
          .status(statusCode.OK)
          .send(
            util.success(
              statusCode.OK,
              responseMessage.DELETE_LIKE_SUCCESS,
              alreadyLike,
            ),
          );
      } else {
        const like = await Like.create({ UserId, PostId });
        await Post.increment("numberOfLikes", {
          where: { id: PostId },
        });
        return res
          .status(statusCode.OK)
          .send(
            util.success(
              statusCode.OK,
              responseMessage.CREATE_LIKE_SUCCESS,
              like,
            ),
          );
      }
    } catch (error) {
      console.log(error);
      return res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR,
          ),
        );
    }
  },
};
