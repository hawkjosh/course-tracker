import React, { useState } from 'react'

// importing custom components
import { Tags } from './Tags.jsx'

export const CourseModal = ({
	courses,
	isOpen,
	closeModal,
	loadCourses,
	modalType,
}) => {
	const [title, setTitle] = useState(courses.title || '')
	const [link, setLink] = useState(courses.link || '')
	const [tags, setTags] = useState(courses.tags || [])

	const submitCourse = async (title, link, tags) => {
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'POST',
				body: JSON.stringify({
					title,
					link,
					tags,
				}),
			})
			loadCourses()
		} catch (err) {
			console.error(err)
		}
	}

	const updateCourse = async ({ title, link, tags }) => {
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'PUT',
				body: JSON.stringify({
					id: courses.id,
					title: title,
					link: link,
					tags: tags,
				}),
			})
			loadCourses()
		} catch (err) {
			console.error(err)
		}
	}

	const deleteCourse = async () => {
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'DELETE',
				body: JSON.stringify({ id: courses.id }),
			})
			loadCourses()
		} catch (err) {
			console.error(err)
		}
	}

	const handleSubmitClick = () => {
		submitCourse(title, link, tags)
		closeModal()
	}

	const handleUpdateClick = () => {
		updateCourse({ title, link, tags })
		closeModal()
	}

	const handleDeleteClick = () => {
		deleteCourse()
		closeModal()
	}

	return (
		<div
			className={`course-modal ${isOpen ? 'open' : ''}`}
			onClick={closeModal}>
			<div className='course-modal-overlay'>
				<div
					className='course-modal-content'
					onClick={(e) => e.stopPropagation()}>
					{modalType === 'Create' && (
						<>
							<div className='course-modal-title'>Add New Course</div>
							<div className='course-modal-section-wrapper'>
								<input
									className='course-modal-input'
									type='text'
									name='course-title'
									placeholder='Course Title'
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>
							<div className='course-modal-section-wrapper'>
								<input
									className='course-modal-input'
									type='text'
									name='course-link'
									placeholder='Course Link'
									value={link}
									onChange={(e) => setLink(e.target.value)}
								/>
							</div>
							<div className='course-modal-section-wrapper'>
								<Tags
									className='tags-container'
									tagsUpdated={setTags}
									initialTags={courses.tags}
								/>
							</div>
							<div className='course-modal-btns-wrapper'>
								<button
									className='course-modal-btn'
									onClick={handleSubmitClick}>
									Submit
								</button>
								<button
									className='course-modal-btn'
									onClick={closeModal}>
									Cancel
								</button>
							</div>
						</>
					)}

					{modalType === 'Edit' && (
						<>
							<div className='course-modal-title'>Edit Course Info</div>
							<div className='course-modal-section-wrapper'>
								<label
									className='course-modal-input-label'
									htmlFor='course-title'>
									Course Title:
								</label>
								<input
									className='course-modal-input'
									type='text'
									name='course-title'
									placeholder='Course Title'
									value={title}
									onChange={(e) => setTitle(e.target.value)}
								/>
							</div>
							<div className='course-modal-section-wrapper'>
								<label
									className='course-modal-input-label'
									htmlFor='course-link'>
									Course Link:
								</label>
								<input
									className='course-modal-input'
									type='text'
									name='course-link'
									placeholder='Course Link'
									value={link}
									onChange={(e) => setLink(e.target.value)}
								/>
							</div>
							<div className='course-modal-section-wrapper'>
								<Tags
									className='tags-container'
									tagsUpdated={setTags}
									initialTags={courses.tags}
								/>
							</div>
							<div className='course-modal-btns-wrapper'>
								<button
									className='course-modal-btn'
									onClick={handleUpdateClick}>
									Update
								</button>
								<button
									className='course-modal-btn'
									onClick={handleDeleteClick}>
									Delete
								</button>
								<button
									className='course-modal-btn'
									onClick={closeModal}>
									Cancel
								</button>
							</div>
						</>
					)}
				</div>
			</div>
		</div>
	)
}
