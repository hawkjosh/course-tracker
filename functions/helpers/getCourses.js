// const { table } = require('./airtable')
import { table } from './airtable.js'
// const formattedReturn = require('./formattedReturn')
import { formattedReturn } from './formattedReturn.js'

// module.exports = async () => {
// 	try {
// 		const courses = await table.select().firstPage()
// 		const formattedCourses = courses.map((course) => ({
// 			id: course.id,
// 			...course.fields,
// 		}))
// 		return formattedReturn(200, formattedCourses)
// 	} catch (err) {
// 		console.error(err)
// 		return formattedReturn(500, {})
// 	}
// }
export const getCourses = async () => {
	try {
		const courses = await table.select().firstPage()
		const formattedCourses = courses.map((course) => ({
			id: course.id,
			...course.fields,
		}))
		return formattedReturn(200, formattedCourses)
	} catch (err) {
		console.error(err)
		return formattedReturn(500, {})
	}
}
