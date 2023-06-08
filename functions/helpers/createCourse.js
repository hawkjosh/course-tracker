// const { table } = require('./airtable')
import { table } from './airtable.js'
// const formattedReturn = require('./formattedReturn')
import { formattedReturn } from './formattedReturn.js'

// module.exports = async (event) => {
// 	const fields = JSON.parse(event.body)
// 	try {
// 		const createdCourse = await table.create([{ fields }])
// 		return formattedReturn(200, createdCourse)
// 	} catch (err) {
// 		console.error(err)
// 		return formattedReturn(500, {})
// 	}
// }
export const createCourse = async (event) => {
	const fields = JSON.parse(event.body)
	try {
		const createdCourse = await table.create([{ fields }])
		return formattedReturn(200, createdCourse)
	} catch (err) {
		console.error(err)
		return formattedReturn(500, {})
	}
}
