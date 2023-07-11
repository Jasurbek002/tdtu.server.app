const model = require("./model.js");
const {
  InternalServerError,
  NotFoundError,
} = require("./../../utils/error.js");
const uploadFile = require("../../lib/multer.js").single("file");
const fs = require('fs')
const path = require('path')

async function GET(req, res, next) {
  try {
    const data = await model.GET(req.params);
    if (data) {
      res.status(200).json({
        status: 200,
        message: "ok",
        data: data,
      });
    }
  } catch (error) {
    if (error.status === 404) {
      return next(new NotFoundError(error.status, error.message));
    }
    return next(new InternalServerError(500, error.message));
  }
}

async function GET_ROOMS(req, res, next) {
  try {
    const rooms = await model.GET_ROOMS();
    if (rooms) {
      res.status(200).json({
        status: 200,
        message: "ok",
        rooms: rooms,
      });
    }
  } catch (error) {
    if (error.status === 404) {
      return next(new NotFoundError(error.status, error.message));
    }
    return next(new InternalServerError(500, error.message));
  }
}

async function POST(req, res, next) {
  try {
    const files = await model.POST(req.body, req.file);
    if (files) {
      res.status(200).json({
        status: 200,
        message: "ok",
        files: files,
      });
    }
  } catch (error) {
    if (error.status === 404) {
      return next(new NotFoundError(error.status, error.message));
    }
    return next(new InternalServerError(500, error.message));
  }
}

async function PUT(req, res, next) {
  try {
    const { putData, oldData } = await model.PUT(
      req.body,
      req.file,
      req.params
    );
    if (putData) {
     if(oldData.file) fs.unlinkSync(path.join("src", "pdf", oldData.file));
      res.status(200).json({
        status: 200,
        message: "ok",
        data: putData,
      });
    }
  } catch (error) {
    if (error.status === 404) {
      return next(new NotFoundError(error.status, error.message));
    }
    return next(new InternalServerError(500, error.message));
  }
}

module.exports = {
  GET,
  GET_ROOMS,
  POST,
  PUT,
  uploadFile,
};
