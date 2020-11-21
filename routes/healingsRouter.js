const express = require("express");
const healingsRouter = express.Router();
const statusCode = require("../modules/statusCode");
const util = require("../modules/util");

healingsRouter.get("/", (req, res) => {
  const randomNum = parseInt(Math.random() * 60 + 1);
  const fileNum = randomNum < 10 ? "00" + randomNum : "0" + randomNum;
  const imageUrl =
    "https://sopt-27-wooyeong.s3.ap-northeast-2.amazonaws.com/images/soptkerthon/healing/image" +
    fileNum +
    ".jpg";
  console.log(imageUrl);
  return res
    .status(statusCode.OK)
    .send(util.success(statusCode.OK, "Random image success", imageUrl));
});

module.exports = healingsRouter;
