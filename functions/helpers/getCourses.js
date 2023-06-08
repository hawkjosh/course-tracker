import { table } from './airtable.js'
import { formattedReturn } from './formattedReturn.js'

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
