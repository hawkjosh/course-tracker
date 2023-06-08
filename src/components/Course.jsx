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
			<div
				className='course-info-wrapper'
				>
				<a className='course-title' href={course.link}
				target='_blank'
				rel='noreferrer'>{course.name}</a>
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

				<div className='course-btns-wrapper'>
					<EditIcon
						className='course-action-btn update disabled'
						onClick={updateCourse}
					/>
						<TrashIcon
							className='course-action-btn remove'
							onClick={deleteCourse}
						/>
					{!course.purchased && (
							<PurchasedIcon
								className='course-action-btn purchased'
								onClick={markCoursePurchased}
							/>
					)}
				</div>
			</div>
		</div>
	)
}
