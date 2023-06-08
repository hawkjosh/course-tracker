import { table } from './airtable.js'
import { formattedReturn } from './formattedReturn.js'

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
