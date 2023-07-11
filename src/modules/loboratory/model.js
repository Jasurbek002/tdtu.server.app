const { fetchAll, fetch } = require("../../lib/postgres");
const { GET_All, ROOMS, POST_DATA, GET_ONE, PUT_DATA } = require("./query.js");

async function GET({ roomId }) {
  try {
    const data = await fetchAll(GET_All, roomId);
    return data;
  } catch (error) {
    throw error;
  }
}

async function GET_ROOMS() {
  try {
    const rooms = await fetchAll(ROOMS);
    return rooms;
  } catch (error) {
    throw error;
  }
}

async function POST(
  { nameUz, nameEn = "", nameRu = "", roomId },
  { filename }
) {
  try {
    const postData = await fetch(
      POST_DATA,
      filename,
      roomId,
      nameUz,
      nameEn,
      nameRu
    );
    return postData;
  } catch (error) {
    throw error;
  }
}

async function PUT({ nameUz, nameEn, nameRu, roomId }, { filename }, { id }) {
  try {
    console.log(nameEn);
    const oldData = await fetch(GET_ONE, id);
    const putData = await fetch(
      PUT_DATA,
      filename ? filename : oldData.file,
      roomId ? roomId : oldData.room_id,
      nameUz ? nameUz : oldData.name_uz,
      nameEn ? nameEn : oldData.name_en,
      nameRu ? nameRu : oldData.name_ru,
      id
    );
    return { putData, oldData };
  } catch (error) {
    throw error;
  }
}

module.exports = {
  GET,
  GET_ROOMS,
  POST,
  PUT,
};
