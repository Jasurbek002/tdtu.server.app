const { fetch, fetchAll } = require("../../lib/postgres.js");
const {
  GET_DATA,
  POST_DATA,
  PUT_DATA,
  POST_INFO_DATA,
  PUT_INFO_DATA,
  GET_INFO_ONE,
  GET_INFO_ALL,
} = require("./query");

async function GET({ brmId }) {
  try {
    const data = await fetch(GET_DATA, brmId);
    return data;
  } catch (error) {
    throw error;
  }
}

async function GET_ALL_INFO() {
  try {
    const data = await fetchAll(GET_INFO_ALL);
    return data;
  } catch (error) {
    throw error;
  }
}

async function POST({ title_uz, title_en = "", text_uz, text_en = "" }) {
  try {
    const data = await fetch(POST_DATA, title_uz, title_en, text_uz, text_en);
    return data;
  } catch (error) {
    throw error;
  }
}

async function PUT(
  { title_uz, title_en = "", text_uz, text_en = "" },
  { brmId }
) {
  try {
    const oldData = await fetch(GET_DATA, brmId);

    const data = await fetch(
      PUT_DATA,
      title_uz !== "" ? title_uz : oldData.title_uz,
      title_en !== "" ? title_en : oldData.title_en,
      text_uz !== "" ? text_uz : oldData.text_uz,
      text_en !== "" ? text_en : oldData.text_en,
      brmId
    );
    return data;
  } catch (error) {
    throw error;
  }
}

async function POST_INFO({
  brm_id,
  subtitle_uz,
  subtitle_en = "",
  subtext_uz,
  subtext_en = "",
}) {
  try {
    const data = await fetch(
      POST_INFO_DATA,
      brm_id,
      subtitle_uz,
      subtitle_en,
      subtext_uz,
      subtext_en
    );
    return data;
  } catch (error) {
    throw error;
  }
}

async function PUT_INFO(
  { brmId, subtitle_uz, subtitle_en = "", subtext_uz, subtext_en = "" },
  { infoId }
) {
  try {
    const oldData = await fetch(GET_INFO_ONE, infoId);
    console.log(brmId)
    const data = await fetch(
      PUT_INFO_DATA,
      brmId ? oldData.brm_id : brmId,
      subtitle_uz === ""  ? oldData.subtitle_uz : subtitle_uz,
      subtitle_en === "" ? oldData.subtitle_en : subtitle_en,
      subtext_uz === ""  ? oldData.subtext_uz : subtext_uz,
      subtext_en === ""  ? oldData.subtext_en : subtext_en,
      infoId
    );
    return data;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  GET,
  POST,
  PUT,
  GET_ALL_INFO,
  PUT_INFO,
  POST_INFO,
};
