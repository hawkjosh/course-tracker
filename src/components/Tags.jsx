import React, { useState, useEffect } from 'react'

const tagChoices = [
	'css',
	'express',
	'html',
	'javascript',
	'node',
	'react',
	'typescript',
]

export const Tags = ({ tagsUpdated, key }) => {
	const [selectedTags, setSelectedTags] = useState([])

	useEffect(() => {
		setSelectedTags([])
	}, [key])

	const tagChange = (e) => {
		const value = e.target.value
		const alreadySelected = selectedTags.includes(value)
		if (e.target.checked && !alreadySelected) {
			setSelectedTags([...selectedTags, value])
		} else if (!e.target.checked && alreadySelected) {
			setSelectedTags(selectedTags.filter((prevTag) => prevTag !== value))
		}
	}

	useEffect(() => {
		tagsUpdated(selectedTags)
	}, [selectedTags, tagsUpdated])

	const mediaQueryStyle = {
		outline: 'dotted rgba(255,0,0,0.25)',
		width: '100%',
		'@media (min-width: 425px)': {
			width: '75%',
		},
	}

	return (
		<div className='d-flex flex-column align-items-center m-1'>
			<div className='fs-4 text-primary mb-2 text-decoration-underline'>
				Tags
			</div>
			{/* <div className='container d-flex flex-wrap justify-content-between align-items-center '>
				{tagChoices.map((choice, index) => (
					<div className='d-flex justify-content-center align-items-center gap-2 px-4 px-md-3 px-lg-4 px-xl-5 py-2'>
						<input
							type='checkbox'
							value={choice}
							className='form-check-input border border-primary border-1'
							onChange={tagChange}
						/>
						<label
							key={index}
							className='form-check-label text-primary font-monospace'>
							{choice}
						</label>
					</div>
				))}
			</div> */}
			<div className='container mb-2'>
				<div className='row g-2' style={mediaQueryStyle}>
					{tagChoices.map((choice, index) => (
						<div
							className='d-flex col-6 col-sm-4 col-md-6 col-lg-4 col-xl-3'
							key={index}>
							<div className='form-check form-check-inline d-flex align-items-center gap-2'>
								<input
									type='checkbox'
									value={choice}
									className='form-check-input border border-primary border-1'
									onChange={tagChange}
								/>
								<label className='form-check-label text-primary font-monospace'>
									{choice}
								</label>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
