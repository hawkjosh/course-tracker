import React from 'react'
import { Course } from './Course'

export const CourseList = ({ courses, refreshCourses, ...props }) => {
	return (
		<div {...props}>
			<div className='course-list-wrapper'>
				<h2 className='course-list-title'>Watch List</h2>
				{courses
					.filter((course) => !course.purchased)
					.map((course, index) => (
						<Course
							className='course-item-container'
							course={course}
							key={index}
							refreshCourses={refreshCourses}
						/>
					))}
			</div>
			<div className='course-list-wrapper'>
				<h2 className='course-list-title'>Purchased</h2>
				{courses
					.filter((course) => course.purchased)
					.map((course, index) => (
						<Course
							className='course-item-container'
							course={course}
							key={index}
							refreshCourses={refreshCourses}
						/>
					))}
			</div>
		</div>
	)
}
