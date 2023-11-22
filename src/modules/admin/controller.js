const model = require("./model.js");
const { sign } = require("./../../lib/jwt.js");
const {
  InternalServerError,
  ForbiddinError,
  NotFoundError,
} = require("../../utils/error.js");


async function GET(req, res, next) {
  try {
    let admin = await model.GET(req.headers);
    if (admin) {
      res.status(200).json({
        status: 200,
        message: "you were successful",
        data: admin,
      });
    }
  } catch (error) {}
}

const LOGIN = async (req, res, next) => {
  try {
    let admin = await model.LOGIN(req.body);
    if (admin) {
      res.status(200).json({
        status: 200,
        message: "you were successful",
        data: {
          token: sign({ level: admin.status, id: admin.admin_id }),
          role: admin.role,
        },
      });
    } else {
      res.status(401).json({
        status: 401,
        message: "invalid username or password",
        token: null,
      });
    }
  } catch (error) {
    return next(new InternalServerError(500, error.message));
  }
};

async function REGISTER(req, res, next) {
  try {
    let newAdmin = await model.REGISTER(req.body, req.headers);
    if (newAdmin) {
      res.status(201).json({
        status: 201,
        message: "created new admin!",
        token: sign({ level: newAdmin.status, id: newAdmin.admin_id }),
      });
    } else {
      res.status(201).json({
        status: 403,
        message: err.message,
        token: null,
      });
    }
  } catch (error) {
    return next(new ForbiddinError(403, error.message));
  }
}

const PUT = async (req, res, next) => {
  try {
    let putAdmin = await model.PUT(req.body, req.headers, req.params);
    if (putAdmin) {
      res.status(201).json({
        status: 201,
        message: "updated password",
        data: putAdmin,
      });
    }
  } catch (error) {
    if (error.status === 403) {
      return next(new ForbiddinError(403, putAdmin));
    }
    if (error.status === 404) {
      return next(new NotFoundError(404, error.message));
    }
    return next(new InternalServerError(error.status, error.message));
  }
};

const DELETE = async (req, res, next) => {
  try {
    let deleteAdmin = await model.DELETE(req.headers, req.params);
    if (deleteAdmin) {
      res.status(200).json({
        status: 200,
        message: "deleted admin!",
        data: deleteAdmin,
      });
    }
  } catch (error) {
    if (error.status === 403) {
      return next(new ForbiddinError(403, error.message));
    }
    return next(new InternalServerError(500, error.message));
  }
};

module.exports = {
  LOGIN,
  REGISTER,
  PUT,
  DELETE,
  GET,
};
