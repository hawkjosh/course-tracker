import React, { useEffect, useState } from 'react'
import codeSquare from './assets/code-square.svg'
// import './App.css'

import CourseList from './components/CourseList'
import CourseForm from './components/CourseForm'

export default function App() {
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
		<div className='container mb-5'>
			<div className='d-flex align-items-center mt-4'>
				<div className='d-flex flex-column align-items-center border border-primary border-4 rounded py-4 bg-primary me-4'>
					<div className='text-white fs-2 fw-bold text-center text-wrap text-uppercase'>My Course Tracker</div>
					<img src={codeSquare} alt='Code Icon' className='img-fluid mt-5' />
				</div>
				<CourseForm courseAdded={loadCourses} />
			</div>
			<CourseList courses={courses} refreshCourses={loadCourses} />
		</div>
	)
}
