const { InternalServerError, MyError } = require("../../utils/error");
const model = require("./model.js");
const multer = require("./../../lib/multer.js");
const fileUpload = multer.single("media");
const fs = require("fs");
const path = require("path");

async function media_create(req, res, next) {
  try {
    console.log(req.file)
    const data = await model.CREATE_MEDIA(req.body, req.file);
    console.log(data);
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

async function brm_get_all(req, res, next) {
  try {
    const data = await model.GET_ALL_BRM();
    if (data) {
      res.status(200).json({
        status: 200,
        message: "Successfuly come to data!",
        data: data,
      });
    }
  } catch (error) {
    return next(new MyError(error.status, error.message));
  }
}

async function brm_get_one(req, res, next) {
  try {
    const data = await model.GET_ONE_BRM(req.params);
    if (data) {
      res.status(200).json({
        status: 200,
        message: "Successfuly come to data!",
        data: data,
      });
    }
  } catch (error) {
    return next(new MyError(error.status, error.message));
  }
}

async function brm_delete(req, res, next) {
  try {
    const data = await model.DELETE_BRM(req.params);
    if (data) {
      fs.unlinkSync(path.join("src", "uploads", data.brm_image));
      res.status(200).json({
        status: 200,
        message: "Successfuly deleted data!",
        data: data,
      });
    }
  } catch (error) {
    return next(new MyError(error.status, error.message));
  }
}

module.exports = {
  fileUpload,
  media_create,
};
