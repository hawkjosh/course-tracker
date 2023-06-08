import React, { useEffect, useState } from 'react'

import { AppLogo } from './components/AppLogo'

// import { CourseList } from './components/CourseList'
import { CourseForm } from './components/CourseForm'

import { CourseUpdateModal } from './components/CourseUpdateModal.jsx'

// PIN → Below courseData object is for development only.
// import { courseData } from './data/courseData.js'

import './assets/styles/App.css'

export const App = () => {
	const [courses, setCourses] = useState([])

	const loadCourses = async () => {
		try {
			const res = await fetch('/.netlify/functions/courses')
			const courses = await res.json()
			setCourses(courses)
		} catch (error) {
			console.error(error)
		}
	}

	// PIN → Below loadCourses function is for development only. Use above function for production.
	// const loadCourses = () => {
	// 	setCourses(courseData)
	// }

	useEffect(() => {
		loadCourses()
	}, [])

	return (
		<div className='app-container'>
			<div className='top-section-wrapper'>
				<AppLogo className='app-logo' />
				<CourseForm
					className='form-container'
					courseAdded={loadCourses}
				/>
			</div>
			<div className='bottom-section-wrapper'>
				{/* <CourseList
					className='course-list-container'
					courses={courses}
					refreshCourses={loadCourses}
				/> */}
				<CourseUpdateModal courses={courses} />
			</div>
		</div>
	)
}
