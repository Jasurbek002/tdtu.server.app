const { InternalServerError, MyError } = require("../../utils/error");
const model = require("./model.js");
const multer = require("./../../lib/multer.js");
const fileUpload = multer.single("media");
const fs = require("fs");
const path = require("path");

async function media_create(req, res, next) {
  try {
    console.log(req.file);
    const data = await model.CREATE_MEDIA(req.body, req.file);
    console.log("res", data);
    if (data) {
      res.status(201).json({
        status: 201,
        message: "Successfuly added!",
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
    return next(new MyError(error.status, error.message));
  }
}

async function getAllMedia(req,res) {
  try {
    const data = await model.GET_ALL_MEDIA();
    if (data) {
      res.status(201).json({
        status: 201,
        message: "Successfuly get all!",
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

async function deleteMedia(req,res){
  try {
    const data = await model.DELETE_MEDIA(req.params);
    if (data) {
      res.status(201).json({
        status: 201,
        message: "Successfuly deleted!",
        data: data,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  fileUpload,
  media_create,
  getAllMedia,
  deleteMedia
};
