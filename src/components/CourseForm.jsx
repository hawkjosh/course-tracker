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
						<div className='form-card-input'>
							<input
								type='text'
								value={name}
								placeholder='Course Name'
								className='form-card-input-control'
								onChange={(e) => setName(e.target.value)}
							/>
						</div>
						{/* <div className='form-floating mb-3 mx-2 border border-primary border-1 rounded'>
							<input
								type='text'
								name='link'
								value={link}
								placeholder='Course Link'
								className='form-control'
								onChange={(e) => setLink(e.target.value)}
							/>
							<label
								htmlFor='link'
								className='text-muted'>
								Course Link
							</label>
						</div> */}
						<div className='form-floating mb-3 mx-2 border border-primary border-1 rounded'>
							<input
								type='text'
								name='link'
								value={link}
								placeholder='Course Link'
								className='form-control'
								onChange={(e) => setLink(e.target.value)}
							/>
							<label
								htmlFor='link'
								className='text-muted'>
								Course Link
							</label>
						</div>
						<Tags
							tagsUpdated={setTags}
							key={count}
						/>
						<div className='d-flex justify-content-center pt-1'>
							<button
								type='submit'
								className='btn btn-sm btn-outline-primary'>
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}
