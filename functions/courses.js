// const formattedReturn = require('./helpers/formattedReturn')
import { formattedReturn } from './helpers/formattedReturn'
// const getCourses = require('./helpers/getCourses')
import { getCourses } from './helpers/getCourses.js'
// const createCourse = require('./helpers/createCourse')
import { createCourse } from './helpers/createCourse.js'
// const deleteCourse = require('./helpers/deleteCourse')
import { deleteCourse } from './helpers/deleteCourse.js'
// const updateCourse = require('./helpers/updateCourse')
import { updateCourse } from './helpers/updateCourse.js'

// exports.handler = async (event) => {
// 	if (event.httpMethod === 'GET') {
// 		return await getCourses(event)
// 	} else if (event.httpMethod === 'POST') {
// 		return await createCourse(event)
// 	} else if (event.httpMethod === 'PUT') {
// 		return await updateCourse(event)
// 	} else if (event.httpMethod === 'DELETE') {
// 		return await deleteCourse(event)
// 	} else {
// 		return formattedReturn(405, {})
// 	}
// }
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
