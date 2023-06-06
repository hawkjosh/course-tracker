import React, { useState } from 'react'
import { Tags } from './Tags'

export const CourseForm = ({ courseAdded }) => {
	const [name, setName] = useState('')
	const [link, setLink] = useState('')
	const [tags, setTags] = useState([])
	const [count, setCount] = useState(0)

	const resetForm = () => {
		setName('')
		setLink('')
		setCount(count + 1)
	}

	const submitCourse = async (e) => {
		e.preventDefault()
		try {
			await fetch('/.netlify/functions/courses', {
				method: 'POST',
				body: JSON.stringify({
					name,
					link,
					tags,
				}),
			})
			resetForm()
			courseAdded()
		} catch (err) {
			console.error(err)
		}
		console.log(name, link)
	}

	return (
		<div className='form-container'>
			<div className='form-card'>
				<div className='form-card-header'>Add New Course</div>
				<div className='form-card-body'>
					<form onSubmit={submitCourse}>
						<div className='form-card-input-wrapper'>
							<input
								type='text'
								value={name}
								placeholder='Course Name'
								className='form-card-input'
								onChange={(e) => setName(e.target.value)}
							/>
							<input
								type='text'
								value={link}
								placeholder='Course Link'
								className='form-card-input'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<Tags
							tagsUpdated={setTags}
							key={count}
						/>
						<div className='form-card-submit-btn-wrapper'>
							<button
								type='submit'
								className='form-card-submit-btn'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
