import React from 'react'

export const AppLogo = ({ ...props }) => {
	return (
		<svg
			style={{
				border: '1rem solid hsl(216, 98%, 52%)',
				borderRadius: '12.5%',
				fill: 'hsl(216, 98%, 52%)',
				fontWeight: '700',
			}}
			viewBox='0 0 100 100'
			{...props}>
			<text
				x='50%'
				y='17.5%'
				fontSize='1.125rem'
				textAnchor='middle'>
				Course
			</text>
			<text
				x='50%'
				y='35%'
				fontSize='1.125rem'
				textAnchor='middle'>
				Tracker
			</text>
			<path
				fill='none'
				stroke='hsl(216, 98%, 52%)'
				strokeWidth='8'
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M40 46.5l-22.5 22.5l22.5 22.5m20 -45l22.5 22.5l-22.5 22.5'
			/>
		</svg>
	)
}
