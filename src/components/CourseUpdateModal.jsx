import React, { useState } from 'react'

import '../assets/styles/CourseUpdateModal.css'

const Modal = ({
	isOpen,
	onClose,
	courseData,
	objectIndex,
	handleUpdate,
}) => {
	const [name, setName] = useState(courseData[objectIndex].name)
	const [link, setLink] = useState(courseData[objectIndex].link)
	const [purchased, setPurchased] = useState(courseData[objectIndex].purchased)

	const handleUpdateClick = () => {
		const updatedData = {
			name,
			link,
			purchased,
		}
		handleUpdate(objectIndex, updatedData)
	}

	const deleteCourse = async () => {
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'DELETE',
				body: JSON.stringify({ id: courseData.id }),
			})
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div
			className={`modal-container ${isOpen ? 'open' : ''}`}
			onClick={onClose}>
			<div className='modal-overlay'>
				<div
					className='modal-content'
					onClick={(e) => e.stopPropagation()}>
					<h2>Update Object Information</h2>
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
					<label>Purchased:</label>
					<input
						type='checkbox'
						checked={purchased}
						onChange={(e) => setPurchased(e.target.checked)}
					/>
					<div className='modal-actions'>
						<button onClick={handleUpdateClick}>Update</button>
						<button onClick={deleteCourse}>Delete</button>
						<button onClick={onClose}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export const CourseUpdateModal = ({ courseData, refreshCourses }) => {
	const [modalOpen, setModalOpen] = useState(false)
	const [selectedCourseIndex, setSelectedCourseIndex] = useState(null)

	const openModal = (index) => {
		setSelectedCourseIndex(index)
		setModalOpen(true)
	}

	const closeModal = () => {
		setSelectedCourseIndex(null)
		setModalOpen(false)
	}

	const handleUpdate = async (index, updatedData) => {
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'PUT',
				body: JSON.stringify({
					id: courseData[index].id,
					fields: {
						name: updatedData.name,
						link: updatedData.link,
						// tags: updatedData.tags,
						purchased: updatedData.purchased,
					},
				}),
			})
			refreshCourses()
			closeModal()
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div className='main-content'>
			{courseData.map((object, index) => (
				<div
					key={index}
					onClick={() => openModal(index)}>
					<h3>{object.name}</h3>
					<a href={object.link}>Course Link</a>
					{object.purchased ? <p>Purchased 👍</p> : <p>Not Purchased 👎</p>}
				</div>
			))}

			{modalOpen && (
				<Modal
					isOpen={modalOpen}
					onClose={closeModal}
					objectIndex={selectedCourseIndex}
					handleUpdate={handleUpdate}
					courseData={courseData}
				/>
			)}
		</div>
	)
}
