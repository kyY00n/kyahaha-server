const { Post } = require("../models");
const {
  generateRandomNickname,
} = require("../modules/randomNicknameGenerator");
const responseMessage = require("../modules/responseMessage");
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");

module.exports = {
  createPost: async (req, res) => {
    const { nickname, part, title, contents } = req.body;
    try {
      const post = await Post.create({
        nickname,
        part,
        title,
        contents,
      });
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
        attributes: ["nickname", "part", "title", "contents"],
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
};
