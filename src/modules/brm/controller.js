const { InternalServerError } = require("../../utils/error");
const model = require("./model.js");

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
    const data = await model.PUT_INFO(req.body,req.params);
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

module.exports = {
  GET,
  POST,
  PUT,
  POST_INFO,
  PUT_INFO,
  GET_ALL_INFO
};
