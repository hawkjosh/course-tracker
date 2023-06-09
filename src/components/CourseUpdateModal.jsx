import React, { useState } from 'react'

import '../assets/styles/CourseUpdateModal.css'

export const CourseUpdateModal = ({ isOpen, onClose, courseId, course, handleUpdate }) => {
	const [name, setName] = useState(course.name)
	const [link, setLink] = useState(course.link)
	const [tags, setTags] = useState(course.tags)
	const [purchased, setPurchased] = useState(course.purchased)

	const handleUpdateClick = () => {
		const updatedData = {
			name,
			link,
			purchased,
		}
		handleUpdate(courseId, updatedData)
	}

	const handleTagsChange = (e) => {
		const selectedTags = Array.from(e.target.tags, (tag) => tag.value)
		setTags(selectedTags)
	}

	return (
		<div
			className={`modal-container ${isOpen ? 'open' : ''}`}
			onClick={onClose}>
			<div className='modal-overlay'>
				<div
					className='modal-content'
					onClick={(e) => e.stopPropagation()}>
					<h2>Update Course Information</h2>
					<label>Name:</label>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<label>Link:</label>
					<input
						type='text'
						value={link}
						onChange={(e) => setLink(e.target.value)}
					/>
					<label>Tags:</label>
					<select
						multiple
						value={tags}
						onChange={handleTagsChange}
						size='12'
						style={{ marginBottom: '0.75rem' }}>
						<option value='bootstrap'>Bootstrap</option>
						<option value='css'>CSS</option>
						<option value='graphql'>GraphQL</option>
						<option value='html'>HTML</option>
						<option value='javascript'>JavaScript</option>
						<option value='jquery'>jQuery</option>
						<option value='json'>JSON</option>
						<option value='nodejs'>Node.js</option>
						<option value='react'>React</option>
						<option value='svg'>SVG</option>
						<option value='tailwind'>Tailwind</option>
						<option value='typescript'>TypeScript</option>
					</select>
					<label>Purchased:</label>
					<input
						type='checkbox'
						checked={purchased}
						onChange={(e) => setPurchased(e.target.checked)}
					/>
					<div className='modal-actions'>
						<button onClick={handleUpdateClick}>Update</button>
						<button onClick={onClose}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	)
}

// export const CourseUpdateModal = ({ courseData, refreshCourses }) => {
// 	const [modalOpen, setModalOpen] = useState(false)
// 	const [selectedCourseIndex, setSelectedCourseIndex] = useState(null)

// 	const openModal = (index) => {
// 		setSelectedCourseIndex(index)
// 		setModalOpen(true)
// 	}

// 	const closeModal = () => {
// 		setSelectedCourseIndex(null)
// 		setModalOpen(false)
// 	}

// 	const handleUpdate = async (index, updatedData) => {
// 		try {
// 			await fetch('/.netlify/functions/courses', {
// 				method: 'PUT',
// 				body: JSON.stringify({
// 					id: courseData[index].id,
// 					fields: {
// 						name: updatedData.name,
// 						link: updatedData.link,
// 						purchased: updatedData.purchased,
// 					},
// 				}),
// 			})
// 			refreshCourses()
// 			closeModal()
// 		} catch (err) {
// 			console.error(err)
// 		}
// 	}

// 	return (
// 		<div className='main-content'>
// 			{courseData.map((object, index) => (
// 				<div
// 					key={index}
// 					onClick={() => openModal(index)}>
// 					<h3>{object.name}</h3>
// 					<a href={object.link}>Course Link</a>
// 					{object.purchased ? <p>Purchased 👍</p> : <p>Not Purchased 👎</p>}
// 				</div>
// 			))}

// 			{modalOpen && (
// 				<Modal
// 					isOpen={modalOpen}
// 					onClose={closeModal}
// 					objectIndex={selectedCourseIndex}
// 					handleUpdate={handleUpdate}
// 					courseData={courseData}
// 				/>
// 			)}
// 		</div>
// 	)
// }
