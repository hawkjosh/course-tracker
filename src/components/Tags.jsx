import React, { useState, useEffect } from 'react'

import bootstrapImg from '../assets/images/bootstrap.svg'
import cssImg from '../assets/images/css3.svg'
import graphqlImg from '../assets/images/graphql.svg'
import htmlImg from '../assets/images/html5.svg'
import javascriptImg from '../assets/images/javascript.svg'
import jqueryImg from '../assets/images/jquery.svg'
import jsonImg from '../assets/images/json.svg'
import nodejsImg from '../assets/images/nodejs.svg'
import reactImg from '../assets/images/react.svg'
import svgImg from '../assets/images/svg.svg'
import tailwindImg from '../assets/images/tailwind.svg'
import typescriptImg from '../assets/images/typescript.svg'

const tagChoices = [
	{
		name: 'bootstrap',
		img: bootstrapImg,
	},
	{
		name: 'css',
		img: cssImg,
	},
	{
		name: 'graphql',
		img: graphqlImg,
	},
	{
		name: 'html',
		img: htmlImg,
	},
	{
		name: 'javascript',
		img: javascriptImg,
	},
	{
		name: 'jquery',
		img: jqueryImg,
	},
	{
		name: 'json',
		img: jsonImg,
	},
	{
		name: 'nodejs',
		img: nodejsImg,
	},
	{
		name: 'react',
		img: reactImg,
	},
	{
		name: 'svg',
		img: svgImg,
	},
	{
		name: 'tailwind',
		img: tailwindImg,
	},
	{
		name: 'typescript',
		img: typescriptImg,
	},
]

export const Tags = ({ tagsUpdated, count, ...props }) => {
	const [selectedTags, setSelectedTags] = useState([])

	useEffect(() => {
		setSelectedTags([])
	}, [count])

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
		<div {...props}>
			<div className='tags-title'>Tags</div>
			<div className='tag-choices-container'>
				{tagChoices.map((choice, index) => (
					<div
						className='tag-choice'
						key={index}>
						<input
							className='tag-choice-checkbox'
							type='checkbox'
							value={choice.name}
							onChange={tagChange}
						/>
						<img
							className='tag-choice-img'
							src={choice.img}
							alt={choice.name}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
