import { table } from './airtable.js'
import { formattedReturn } from './formattedReturn.js'

export const updateCourse = async (event) => {
	const { id, ...fields } = JSON.parse(event.body)
	try {
		const updatedCourse = await table.update([{ id, fields }])
		return formattedReturn(200, updatedCourse)
	} catch (err) {
		console.error(err)
		return formattedReturn(500, {})
	}
}
