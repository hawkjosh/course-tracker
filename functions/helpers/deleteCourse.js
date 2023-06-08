// const { table } = require('./airtable')
import { table } from './airtable.js'
// const formattedReturn = require('./formattedReturn')
import { formattedReturn } from './formattedReturn.js'

// module.exports = async (event) => {
// 	const { id } = JSON.parse(event.body)
// 	try {
// 		const deletedCourse = await table.destroy(id)
// 		return formattedReturn(200, deletedCourse)
// 	} catch (err) {
// 		console.error(err)
// 		return formattedReturn(500, {})
// 	}
// }
export const deleteCourse = async (event) => {
	const { id } = JSON.parse(event.body)
	try {
		const deletedCourse = await table.destroy(id)
		return formattedReturn(200, deletedCourse)
	} catch (err) {
		console.error(err)
		return formattedReturn(500, {})
	}
}
