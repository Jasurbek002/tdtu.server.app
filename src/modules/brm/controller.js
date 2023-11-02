const { InternalServerError, MyError } = require("../../utils/error");
const model = require("./model.js");
const multer = require("./../../lib/multer.js");
const fileUpload = multer.single("brm_image");
const fs = require('fs')
const path = require('path')
async function GET(req, res, next) {
  try {
    const data = await model.GET(req.params);
    if (data) {
      res.status(200).json({
        status: 200,
        message: "successfuly!",
        data: data,
      });
    }
  } catch (error) {
    return next(new InternalServerError(500, error.message));
  }
}

async function GET_ALL_INFO(req, res, next) {
  try {
    const data = await model.GET_ALL_INFO();
    if (data) {
      res.status(200).json({
        status: 200,
        message: "successfuly!",
        data: data,
      });
    }
  } catch (error) {
    return next(new InternalServerError(500, error.message));
  }
}

async function POST(req, res, next) {
  try {
    const data = await model.POST(req.body);
    if (data) {
      res.status(201).json({
        status: 201,
        message: "successfuly add!",
        data: data,
      });
    }
  } catch (error) {
    return next(new InternalServerError(400, error.message));
  }
}

async function PUT(req, res, next) {
  try {
    const data = await model.POST(req.body, req.params);
    if (data) {
      res.status(201).json({
        status: 201,
        message: "successfuly updated!",
        data: data,
      });
    }
  } catch (error) {
    return next(new InternalServerError(400, error.message));
  }
}

async function POST_INFO(req, res, next) {
  try {
    const data = await model.POST_INFO(req.body);
    if (data) {
      res.status(201).json({
        status: 201,
        message: "successfuly add!",
        data: data,
      });
    }
  } catch (error) {
    return next(new InternalServerError(400, error.message));
  }
}

async function PUT_INFO(req, res, next) {
  try {
    const data = await model.PUT_INFO(req.body, req.params);
    if (data) {
      res.status(201).json({
        status: 201,
        message: "successfuly updated!",
        data: data,
      });
    }
  } catch (error) {
    return next(new InternalServerError(400, error.message));
  }
}

async function brm_create(req, res, next) {
  try {
    const data = await model.CREATE_BRM(req.body, req.file);
    if (data) {
      res.status(201).json({
        status: 201,
        message: "Successfuly added!",
        data: data,
      });
    }
  } catch (error) {
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
      fs.unlinkSync(path.join('src','uploads',data.brm_image))
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
  GET,
  POST,
  PUT,
  POST_INFO,
  PUT_INFO,
  GET_ALL_INFO,
  brm_create,
  brm_delete,
  brm_get_all,
  brm_get_one,
};
