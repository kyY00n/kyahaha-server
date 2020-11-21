const util = require('../modules/util');
const responseMessage = require('../modules/responseMessage');
const statusCode = require('../modules/statusCode');
const { User, Post } = require('../models');

module.exports = {
  createUser: async (req, res) => {
    const { nickname, part } = req.body;
    if(!nickname || !part) {
      console.log('필요한 값이 없습니다');
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.NULL_VALUE));
    }
    try {
      const user = await User.create( {
        nickname: nickname,
        part: part,
      });
      if(!user) {
        console.log('유저 생성 실패');
        return res
          .status(statusCode.INTERNAL_SERVER_ERROR)
          .send(util.fail(statusCode.INTERNAL_SERVER_ERROR, responseMessage.INTERNAL_SERVER_ERROR));
      }
      return res
        .status(statusCode.OK)
        .send(util.success(statusCode.OK, responseMessage.SIGN_UP_SUCCESS));
    } catch (err) {
      console.log(err);
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, responseMessage.SIGN_UP_FAIL));
    }
  }
}