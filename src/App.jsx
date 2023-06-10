import React, { useEffect, useState } from 'react'

import { AppLogo } from './components/AppLogo'

import { CourseList } from './components/CourseList'
import { CourseForm } from './components/CourseForm'

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
				<CourseList
					className='course-list-container'
					courses={courses}
					refreshCourses={loadCourses}
				/>
			</div>
		</div>
	)
}
