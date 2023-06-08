import React from 'react'

import { EditIcon } from './EditIcon.jsx'
import { PurchasedIcon } from './PurchasedIcon.jsx'
import { TrashIcon } from './TrashIcon.jsx'

export const Course = ({ course, refreshCourses, ...props }) => {
	const markCoursePurchased = async () => {
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

	const updateCourse = async () => {
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'PUT',
				body: JSON.stringify({
					id: course.id,
					fields: {
						name: course.name,
						link: course.link,
						tags: course.tags,
						purchased: course.purchased,
					},
				}),
			})
			refreshCourses()
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div {...props}>
			<a
				href={course.link}
				target='_blank'
				rel='noreferrer'
				className='course-info-container'>
				<div className='course-info-wrapper'>
					<div className='course-title-wrapper'>
						<div className='course-title'>{course.name}</div>
					</div>
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
			</a>
			<div className='course-btns-wrapper'>
				{/* <button
					className='course-update-btn'
					onClick={updateCourse}
					disabled> */}
				<EditIcon
					className='course-update-btn'
					onClick={updateCourse}
					disabled
				/>
				{/* </button> */}
				{/* <button
					className='course-remove-btn'
					onClick={deleteCourse}> */}
				<TrashIcon
					className='course-remove-btn'
					onClick={deleteCourse}
				/>
				{/* </button> */}
				{!course.purchased && (
					<button
						className='course-purchased-btn'
						onClick={markCoursePurchased}>
						<PurchasedIcon
							className='course-purchased-btn'
							onClick={markCoursePurchased}
						/>
					</button>
				)}
			</div>
		</div>
	)
}
