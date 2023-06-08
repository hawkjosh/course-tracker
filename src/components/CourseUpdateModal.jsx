import React, { useState } from 'react'
// import { courseData } from '../data/courseData.js'
import axios from 'axios'

import '../assets/styles/CourseUpdateModal.css'

// function Modal({ isOpen, onClose, objectIndex }) {
// 	const [name, setName] = useState(courseData[objectIndex].name)
// 	const [link, setLink] = useState(courseData[objectIndex].link)
// 	const [purchased, setPurchased] = useState(courseData[objectIndex].purchased)

// 	const handleUpdate = () => {
// 		courseData[objectIndex].name = name
// 		courseData[objectIndex].link = link
// 		courseData[objectIndex].purchased = purchased
// 		onClose()
// 	}

// 	return (
// 		<div className={`modal-container ${isOpen ? 'open' : ''}`}>
// 			<div className='modal-overlay'>
// 				<div
// 					className='modal-content'
// 					onClick={(e) => e.stopPropagation()}>
// 					<h2>Update Object Information</h2>
// 					<label>Name:</label>
// 					<input
// 						type='text'
// 						value={name}
// 						onChange={(e) => setName(e.target.value)}
// 					/>
// 					<label>Link:</label>
// 					<input
// 						type='text'
// 						value={link}
// 						onChange={(e) => setLink(e.target.value)}
// 					/>
// 					<label>Purchased:</label>
// 					<input
// 						type='checkbox'
// 						checked={purchased}
// 						onChange={(e) => setPurchased(e.target.checked)}
// 					/>
// 					<div className='modal-actions'>
// 						<button onClick={handleUpdate}>Update</button>
// 						<button onClick={onClose}>Cancel</button>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

export const CourseUpdateModal = ({ courses }) => {
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
			await axios.put('/api/update-record', {
				recordId: courses[index].recordId, // Provide the Airtable record ID
				newData: updatedData,
			})

			closeModal()
		} catch (error) {
			console.error('Error updating record:', error)
		}
	}

	return (
		<div className='main-content'>
			{courses.map((object, index) => (
				<div
					key={index}
					onClick={() => openModal(index)}>
					<h3>{object.name}</h3>
					<p>{object.link}</p>
				</div>
			))}

			{modalOpen && (
				<Modal
					isOpen={modalOpen}
					onClose={closeModal}
					objectIndex={selectedCourseIndex}
					handleUpdate={handleUpdate}
				/>
			)}
		</div>
	)
}

function Modal({ isOpen, onClose, objectIndex, handleUpdate }) {
	const [name, setName] = useState(courses[objectIndex].name)
	const [link, setLink] = useState(courses[objectIndex].link)
	const [purchased, setPurchased] = useState(courses[objectIndex].purchased)

	const handleUpdateClick = () => {
		const updatedData = {
			name,
			link,
			purchased,
		}
		handleUpdate(objectIndex, updatedData)
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
						<button onClick={onClose}>Cancel</button>
					</div>
				</div>
			</div>
		</div>
	)
}