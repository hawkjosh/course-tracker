export const formattedReturn = (statusCode, body) => {
	return {
		statusCode,
		body: JSON.stringify(body),
	}
}
