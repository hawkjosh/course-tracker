import React, { useState } from 'react'

// importing custom components
import { CourseModal } from './CourseModal.jsx'

// importing custom icon components
import { TagIcons } from './icons/TagIcons.jsx'
import { EditIcon } from './icons/EditIcon.jsx'
import { AddIcon } from './icons/AddIcon.jsx'
import { RemoveIcon } from './icons/RemoveIcon.jsx'

export const Course = ({ course, refreshCourses, ...props }) => {
	const [modalType, setModalType] = useState('')
	const [editModalOpen, setEditModalOpen] = useState(false)

	const openModal = () => {
		setModalType('Edit')
		setEditModalOpen(true)
	}

	const closeModal = () => {
		setModalType('')
		setEditModalOpen(false)
	}

	const addPurchased = async () => {
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'PUT',
				body: JSON.stringify({ ...course, purchased: true }),
			})
			refreshCourses()
		} catch (err) {
			console.error(err)
		}
	}

	const removePurchased = async () => {
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'PUT',
				body: JSON.stringify({ ...course, purchased: false }),
			})
			refreshCourses()
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div {...props}>
			{/* <div className='course-info-wrapper'> */}
			<div className='course-title-wrapper'>
				<a
					className='course-title'
					href={course.link}
					target='_blank'
					rel='noreferrer'>
					{course.title}
				</a>
			</div>
			<div className='course-badges-wrapper'>
				{course.tags &&
					course.tags.map((tag, index) => {
						if (tag) {
							return (
								<div
									className='course-badge'
									key={index}>
									<TagIcons tagName={tag} />
									<span className='tooltip-text'>{tag}</span>
								</div>
							)
						}
					})}
			</div>
			{/* </div> */}

			<div className='course-btns-wrapper'>
				<div className='course-action-btn update'>
					<EditIcon onClick={openModal} />
					<span className='tooltip-text'>Edit Course</span>
				</div>
				{!course.purchased ? (
					<div className='course-action-btn purchased'>
						<AddIcon onClick={addPurchased} />
						<span className='tooltip-text'>Move To Purchased</span>
					</div>
				) : (
					<div className='course-action-btn not-purchased'>
						<RemoveIcon onClick={removePurchased} />
						<span className='tooltip-text'>Move To Watch List</span>
					</div>
				)}
			</div>

			{editModalOpen && (
				<CourseModal
					courses={course}
					isOpen={editModalOpen}
					closeModal={closeModal}
					loadCourses={refreshCourses}
					modalType={modalType}
				/>
			)}
		</div>
	)
}
