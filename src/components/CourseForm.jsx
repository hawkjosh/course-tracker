import React, { useState } from 'react'
import Tags from './Tags'

export default function CourseForm({ courseAdded }) {
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
					tags
				})
			})
			resetForm()
			courseAdded()
		} catch (err) {
			console.error(err)
		}
		console.log(name, link)
	}

	return (
		<div className='container w-75 flex-grow-1'>
			<div className='card border border-2 border-primary'>
				<div className='card-header bg-white fs-2 text-center text-primary border-bottom border-primary border-1 py-1'>Add New Course</div>
				<div className='card-body'>
					<form onSubmit={submitCourse}>
						<div className='form-floating mb-3 mx-2 border border-primary border-1 rounded'>
							<input type='text' name='name' value={name} placeholder='Course Name' className='form-control' onChange={(e) => setName(e.target.value)} />
							<label htmlFor='name' className='text-muted'>Course Name</label>
						</div>
						<div className='form-floating mb-3 mx-2 border border-primary border-1 rounded'>
							<input type='text' name='link' value={link} placeholder='Course Link' className='form-control' onChange={(e) => setLink(e.target.value)} />
							<label htmlFor='link' className='text-muted'>Course Link</label>
						</div>
						<Tags tagsUpdated={setTags} key={count} />
						<div className='d-flex justify-content-center pt-1'>
							<button type='submit' className='btn btn-sm btn-outline-primary'>Submit</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}