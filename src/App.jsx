import React, { useEffect, useState } from 'react'

import { AppLogo } from './components/AppLogo'

import { CourseList } from './components/CourseList'
import { CourseForm } from './components/CourseForm'

import { courseData } from './data/courseData.js'

import './App.css'

export const App = () => {
	const [courses, setCourses] = useState([])

	// const loadCourses = async () => {
	// 	try {
	// 		const res = await fetch('/.netlify/functions/courses')
	// 		const courses = await res.json()
	// 		setCourses(courses)
	// 	} catch (error) {
	// 		console.error(error)
	// 	}
	// }

	const loadCourses = () => {
		setCourses(courseData)
	}

	useEffect(() => {
		loadCourses()
	}, [])

	return (
		<div className='page-wrapper'>
			<div className='app-container'>
				<AppLogo className='app-logo' />
				<CourseForm courseAdded={loadCourses} />
			</div>
			<CourseList
				courses={courses}
				refreshCourses={loadCourses}
			/>
		</div>
	)
}
