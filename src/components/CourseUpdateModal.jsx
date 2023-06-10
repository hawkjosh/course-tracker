import React, { useState } from 'react'

const options = [
	'bootstrap',
	'css',
	'graphql',
	'html',
	'javascript',
	'jquery',
	'json',
	'nodejs',
	'react',
	'svg',
	'tailwind',
	'typescript',
]

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
		updateCourse({ name, link, tags })
		onClose()
	}

	const handleDeleteClick = () => {
		deleteCourse()
		onClose()
	}

	const handleTagsChange = (e) => {
		const value = e.target.value
		const alreadySelected = tags.includes(value)
		if (!e.target.checked && !alreadySelected) {
			setTags([...tags, value])
		} else if (!e.target.checked && alreadySelected) {
			setTags(tags.filter((prevTag) => prevTag !== value))
		}
	}

	return (
		<div
			className={`update-modal-container ${isOpen ? 'open' : ''}`}
			onClick={onClose}>
			<div className='update-modal-overlay'>
				<div
					className='update-modal-content'
					onClick={(e) => e.stopPropagation()}>
					<h2 className='update-modal-header'>Update Course Info</h2>
					<div className='update-modal-section-wrapper'>
						<label
							className='update-modal-label'
							htmlFor='course-name'>
							Course Name:
						</label>
						<input
							className='update-modal-text-input'
							type='text'
							name='course-name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className='update-modal-section-wrapper'>
						<label
							className='update-modal-label'
							htmlFor='course-link'>
							Course Link:
						</label>
						<input
							className='update-modal-text-input'
							type='text'
							name='course-link'
							value={link}
							onChange={(e) => setLink(e.target.value)}
						/>
					</div>
					<div className='update-modal-section-wrapper'>
						<label
							className='update-modal-label'
							htmlFor='course-tags'>
							Course Tags:
						</label>
						<select
							className='update-modal-dropdown'
							multiple
							name='course-tags'
							value={tags}
							onChange={handleTagsChange}
							size='6'>
							{options.map((option, index) => (
								<option
									className='update-modal-dropdown-option'
									key={index}
									value={option}>
									{option}
								</option>
							))}
						</select>
					</div>
					<div className='update-modal-btns-wrapper'>
						<button
							className='update-modal-btn'
							onClick={handleUpdateClick}>
							Update
						</button>
						<button
							className='update-modal-btn'
							onClick={handleDeleteClick}>
							Delete
						</button>
						<button
							className='update-modal-btn'
							onClick={onClose}>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
