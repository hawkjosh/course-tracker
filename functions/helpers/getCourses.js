import table from './airtable'
import formattedReturn from './formattedReturn'

export default async (event) => {
	try {
		const courses = await table.select().firstPage()
		const formattedCourses = courses.map((course) => ({
				id: course.id,
				...course.fields
		}))
		return formattedReturn(200, formattedCourses)
	}
	catch (err) {
		console.error(err)
		return formattedReturn(500, {})
	}
}