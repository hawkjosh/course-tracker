import React, { useState, useEffect } from 'react'

// importing custom icon components
import { TagIcons } from '../components/icons/TagIcons.jsx'

const tagChoices = [
	'bootstrap',
	'css',
	'graphql',
	'html',
	'javascript',
	'jquery',
	'json',
	'nodejs',
	'react',
	'svg',
	'tailwind',
	'typescript',
]

export const Tags = ({ tagsUpdated, initialTags, ...props }) => {
	const [selectedTags, setSelectedTags] = useState(initialTags || [])

	const handleTagChange = (e) => {
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
		<div {...props}>
			<div className='tags-title'>Tags</div>
			<div className='tag-choices-container'>
				{tagChoices.map((tag, index) => (
					<div
						className='tag-choice'
						key={index}>
						<input
							className='tag-choice-checkbox'
							type='checkbox'
							value={tag}
							checked={selectedTags.includes(tag)}
							onChange={handleTagChange}
						/>
						<label className='tag-choice-img-wrapper'>
							<TagIcons
								className='tag-choice-img'
								tagName={tag}
							/>
							<span className='tooltip-text'>{tag}</span>
						</label>
					</div>
				))}
			</div>
		</div>
	)
}
