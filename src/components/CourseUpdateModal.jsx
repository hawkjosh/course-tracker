import React, { useState } from 'react'

import '../assets/styles/CourseUpdateModal.css'

export const CourseUpdateModal = ({
	isOpen,
	onClose,
	course,
	deleteCourse,
	updateCourse,
}) => {
	const [name, setName] = useState(course.name)
	const [link, setLink] = useState(course.link)
	const [tags, setTags] = useState(course.tags)

	const handleUpdateClick = () => {
		updateCourse({ name, link })
		onClose()
	}

	const handleDeleteClick = () => {
		deleteCourse()
		onClose()
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
						size='6'
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
					<div className='modal-actions'>
						<button onClick={handleUpdateClick}>Update</button>
						<button onClick={handleDeleteClick}>Delete</button>
						<button onClick={onClose}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	)
}
