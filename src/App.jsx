import React, { useEffect, useState } from 'react'

// importing custom components
import { CoursesList } from './components/CoursesList.jsx'
import { CourseModal } from './components/CourseModal.jsx'

// importing custom icon components
import { AppLogoIcon } from './components/icons/AppLogoIcon.jsx'

// importing styles
import './App.css'

export const App = () => {
	const [courses, setCourses] = useState([])
	const [modalType, setModalType] = useState('')
	const [createModalOpen, setModalOpen] = useState(false)

	const openModal = () => {
		setModalType('Create')
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalType('')
		setModalOpen(false)
	}

	const loadCourses = async () => {
		try {
			const res = await fetch('/.netlify/functions/courses')
			const data = await res.json()
			setCourses(data)
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		loadCourses()
	}, [])

	return (
		<div className='app-container'>
			<div className='app-header'>
				<AppLogoIcon className='app-logo' />
				<button
					className='add-course-btn'
					onClick={openModal}>
					Add New Course
				</button>
			</div>

			{createModalOpen && (
				<CourseModal
					courses={courses}
					isOpen={createModalOpen}
					closeModal={closeModal}
					loadCourses={loadCourses}
					modalType={modalType}
				/>
			)}

			<CoursesList
				className='courses-list-container'
				courses={courses}
				loadCourses={loadCourses}
			/>
		</div>
	)
}
