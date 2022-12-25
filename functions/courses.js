import formattedReturn from './helpers/formattedReturn'
import getCourses from './helpers/getCourses'
import createCourse from './helpers/createCourse'
import deleteCourse from './helpers/deleteCourse'
import updateCourse from './helpers/updateCourse'

export async function handler(event) {
	if (event.httpMethod === 'GET') {
		return await getCourses(event)
	}
	else if (event.httpMethod === 'POST') {
		return await createCourse(event)
	}
	else if (event.httpMethod === 'PUT') {
		return await updateCourse(event)
	}
	else if (event.httpMethod === 'DELETE') {
		return await deleteCourse(event)
	}
	else {
		return formattedReturn(405, {})
	}
}
