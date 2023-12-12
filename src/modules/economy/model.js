const { fetchAll, fetch } = require("../../lib/postgres.js");
const { MyError } = require("../../utils/error.js");
const {
  GETDATA,
  POSTDATA,
  PUTDATA,
  OLDDATA,
  DELETEDATA,
} = require("./query.js");

async function GET() {
  try {
    let getData = await fetchAll(GETDATA);
    if (getData) {
      return getData;
    } else {
      throw new MyError(404, "data not found");
    }
  } catch (error) {
    throw error;
  }
}

async function POST({ nameuz, nameen, department }) {
  try {
    let getData = await fetch(POSTDATA, nameuz, nameen, department);
    if (getData) {
      return getData;
    } else {
      throw new MyError(404, "data not found");
    }
  } catch (error) {
    throw error;
  }
}

async function PUT({ nameuz, nameen, department }, { ecoId }) {
  try {
    let oldData = await fetch(OLDDATA, ecoId);
    let putData = await fetch(
      PUTDATA,
      nameuz ? nameuz : oldData.name_uz,
      nameen ? nameen : oldData.name_en,
      department ? department : oldData.department,
      ecoId
    );
    if (putData) {
      return putData;
    } else {
      throw new MyError(404, "data not found");
    }
  } catch (error) {
    throw error;
  }
}

async function DELETE({ ecoId }) {
  try {
    let getData = await fetch(DELETEDATA,ecoId);
    console.log(getData,ecoId)
    if (getData) {
      return getData;
    } else {
      throw new MyError(404, "data not found");
    }
  } catch (error) {
    throw error;
  }
}

module.exports = {
  GET,
  POST,
  PUT,
  DELETE,
};
