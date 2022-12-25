import React, { useState, useEffect } from 'react'

export default function Tags({ tagsUpdated, key }) {
	const tagChoices = ['css', 'express', 'html', 'javascript', 'node', 'react', 'typescript']

	const [selectedTags, setSelectedTags] = useState([])

	useEffect(() => {
		setSelectedTags([])
	}, [key])

	const tagChange = (e) => {
		const value = e.target.value;
		const alreadySelected = selectedTags.includes(value)
		if (e.target.checked && !alreadySelected) {
			setSelectedTags([...selectedTags, value])
		} else if (!e.target.checked && alreadySelected) {
			setSelectedTags(
				selectedTags.filter((prevTag) => prevTag !== value)
			)
		}
	}

	useEffect(() => {
		tagsUpdated(selectedTags)
	}, [selectedTags, tagsUpdated])

	return (
		<div className='d-flex flex-column align-items-center m-2'>
			<div className='fs-5 text-primary mb-1 text-decoration-underline'>Tags</div>
			<div className='container d-flex flex-wrap justify-content-evenly align-items-center'>
				{tagChoices.map((choice, index) => (
					<div className='me-2 my-1'>
						<input type='checkbox' value={choice} className='form-check-input border border-primary border-1' onChange={tagChange} />
						<label key={index} className='form-check-label text-primary font-monospace ms-2'>{choice}</label>
					</div>
				))}
			</div>
		</div>
	)
}
