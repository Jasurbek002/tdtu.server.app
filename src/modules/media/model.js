const { fetchAll, fetch } = require("../../lib/postgres.js");
const { MyError } = require("../../utils/error.js");
const {
  CREATE_MEDIA_QUERY,
  DELETE_MEDIA_QUERY,
  GET_ALL_MEDIA_QUERY,
  GET_ONE_MEDIA_QUERY,
} = require("./query.js");

async function CREATE_MEDIA({ title_uz, title_en }, { filename }) {
  try {
    const data = await fetch(CREATE_MEDIA_QUERY, title_uz, title_en, filename);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function GET_ALL_MEDIA() {
  try {
    const data = await fetch(GET_ALL_MEDIA_QUERY);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function GET_ONE_MEDIA({ media_id }) {
  try {
    const data = await fetch(GET_ONE_MEDIA_QUERY, media_id);
    return data;
  } catch (error) {
    console.error(error);
  }
}

async function DELETE_MEDIA({ media_id }) {
  try {
    const data = await fetch(DELETE_MEDIA_QUERY, media_id);
    return data;
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  CREATE_MEDIA,
  GET_ALL_MEDIA,
  GET_ONE_MEDIA,
  DELETE_MEDIA,
};
