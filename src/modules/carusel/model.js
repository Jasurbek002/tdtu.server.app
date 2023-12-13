const { fetch, fetchAll } = require('../../lib/postgres');
const { NotFoundError } = require('../../utils/error');
const { GETDATA, POSTDATA, PUTDATA, DELETEDATA, GETONEDATA } = require('./query.js');

async function GET() {
	try {
		let data = await fetchAll(GETDATA);
		if (data) {
			return data;
		} else {
			throw new NotFoundError(404, 'banners not found!');
		}
	} catch (error) {
		throw error;
	}
}

async function POST({ filename }, { titleuz, titleen, textuz, texten }) {
	try {
		let postData = await fetch(POSTDATA, filename, titleuz, titleen, textuz, texten);
		if (postData) {
			return postData;
		} else {
			throw new NotFoundError(404, 'Something went wrong');
		}
	} catch (error) {
		throw error;
	}
}

async function PUT({ bannerId }, { filename }) {
	console.log(filename, bannerId);
	try {
		let putData = await fetch(PUTDATA, bannerId, filename);
		console.log(putData);
		if (putData) {
			return putData;
		} else {
			throw new NotFoundError(404, 'banner not found');
		}
	} catch (error) {
		throw error;
	}
}

async function DELETE({ bannerId }) {
	try {
		let deleteData = await fetch(DELETEDATA, bannerId);
		if (deleteData) {
			return deleteData;
		} else {
			throw new NotFoundError(404, 'banner not found');
		}
	} catch (error) {
		throw error;
	}
}

async function GET_ONE_DATA({ bunnerId }) {
	try {
		const oneData = await fetch(GETONEDATA, bunnerId);
		return oneData;
	} catch (error) {
		throw error;
	}
}

module.exports = {
	GET,
	POST,
	PUT,
	DELETE,
    GET_ONE_DATA
};
