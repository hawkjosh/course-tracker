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

	return (
		<div className='tags-container'>
			<div className='tags-title'>Tags</div>
			<div className='tag-choices-container'>
				<div
					className='tag-choices-wrapper'
					style={{ outline: 'dotted rgba(255,0,0,0.25)' }}>
					{tagChoices.map((choice, index) => (
						<div
							className='tag-choices-area'
							key={index}>
							<div className='tag-choice'>
								<input
									type='checkbox'
									value={choice}
									className='tag-choice-checkbox'
									onChange={tagChange}
								/>
								<label className='tag-choice-text'>{choice}</label>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}
