import React, { useState } from 'react'

import { CourseUpdateModal } from './CourseUpdateModal.jsx'

import { EditIcon } from './EditIcon.jsx'
import { AddIcon } from './AddIcon.jsx'
import { RemoveIcon } from './RemoveIcon.jsx'

export const Course = ({ course, refreshCourses, ...props }) => {
	const [modalOpen, setModalOpen] = useState(false)

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
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

	const deleteCourse = async () => {
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'DELETE',
				body: JSON.stringify({ id: course.id }),
			})
			refreshCourses()
		} catch (err) {
			console.error(err)
		}
	}

	const updateCourse = async ({ name, link, tags }) => {
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'PUT',
				body: JSON.stringify({
					id: course.id,
					name: name,
					link: link,
					tags: tags,
				}),
			})
			refreshCourses()
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div {...props}>
			<div className='course-info-wrapper'>
				<a
					className='course-title'
					href={course.link}
					target='_blank'
					rel='noreferrer'>
					{course.name}
				</a>
				<div className='course-badges-wrapper'>
					{course.tags &&
						course.tags.map((tag, index) => (
							<div
								className='course-badge'
								key={index}>
								{tag}
							</div>
						))}
				</div>
			</div>

			<div className='course-btns-wrapper'>
				<EditIcon
					className='course-action-btn update'
					onClick={openModal}
				/>
				{!course.purchased ? (
					<AddIcon
						className='course-action-btn purchased'
						onClick={addPurchased}
					/>
				) : (
					<RemoveIcon
						className='course-action-btn not-purchased'
						onClick={removePurchased}
					/>
				)}
			</div>

			{modalOpen && (
				<CourseUpdateModal
					isOpen={modalOpen}
					onClose={closeModal}
					course={course}
					deleteCourse={deleteCourse}
					updateCourse={updateCourse}
				/>
			)}
		</div>
	)
}
