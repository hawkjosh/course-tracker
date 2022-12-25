import React from 'react'

export default function Course({ course, refreshCourses }) {
	const markCoursePurchased = async () => {
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'PUT',
				body: JSON.stringify({ ...course, purchased: true })
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
				body: JSON.stringify({ id: course.id })
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
						purchased: course.purchased
					}
				})
			})
			refreshCourses()
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div className='list-group d-flex flex-row'>
			<a href={course.link} target='_blank' rel='noreferrer' className='list-group-item list-group-item-action list-group-item-dark w-75 my-1 border border-primary rounded'>
				<div className='d-flex align-items-center'>
					<div className='me-4 text-primary'>{course.name}</div>
					<div className='d-flex flex-wrap'>
						{course.tags && course.tags.map((tag) => (
							<div className='badge rounded-pill bg-warning border border-primary text-primary mx-2 my-1'>{tag}</div>
						))}
					</div>
				</div>
			</a>
			<div className='d-flex align-items-center ms-3 my-1'>
				<button
					className='btn btn-sm btn-outline-info me-2 disabled'
					onClick={updateCourse}
					>
					Update Course
				</button>
				<button
					className='btn btn-sm btn-outline-danger'
					onClick={deleteCourse}
					>
					Remove from Tracker
				</button>
				{!course.purchased && (
					<button
						className='btn btn-sm btn-outline-success ms-2'
						onClick={markCoursePurchased}
						>
						Move to Purchased
					</button>
				)}
			</div>
		</div>
	)
}
