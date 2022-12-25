module.exports = (statusCode, body) => {
	return {
		statusCode,
		body: JSON.stringify(body)
	}
}

// export default (statusCode, body) => {
// 	return {
// 		statusCode,
// 		body: JSON.stringify(body)
// 	}
// }
