import React from 'react'
import Course from './Course'

export default function CourseList({ courses, refreshCourses }) {

	return (
		<div className='container'>
			<h2 className='mt-4 mb-2 text-primary'>Watch List</h2>
			<div className='list-group'>
				{courses
					.filter((course) => !course.purchased)
					.map((course) => (
						<Course
							course={course}
							key={course.id}
							refreshCourses={refreshCourses}
						/>
					))}
			</div>
			<h2 className='mt-4 mb-2 text-primary'>Purchased</h2>
			{courses
				.filter((course) => course.purchased)
				.map((course) => (
					<Course
						course={course}
						key={course.id}
						refreshCourses={refreshCourses}
					/>
				))}
		</div>
	)
}
