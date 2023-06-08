import { formattedReturn } from './helpers/formattedReturn'
import { getCourses } from './helpers/getCourses.js'
import { createCourse } from './helpers/createCourse.js'
import { deleteCourse } from './helpers/deleteCourse.js'
import { updateCourse } from './helpers/updateCourse.js'

export const handler = async (event) => {
	if (event.httpMethod === 'GET') {
		return await getCourses(event)
	} else if (event.httpMethod === 'POST') {
		return await createCourse(event)
	} else if (event.httpMethod === 'PUT') {
		return await updateCourse(event)
	} else if (event.httpMethod === 'DELETE') {
		return await deleteCourse(event)
	} else {
		return formattedReturn(405, {})
	}
}
