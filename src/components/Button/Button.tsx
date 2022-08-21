// Dependencies
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import * as React from 'react'

// Types
import { ButtonProps } from './Button.types'

// Styles
import './Button.css'

const Button = ({ children, className = '', title = '' }: ButtonProps) => (
	<ButtonUnstyled
		title={title}
		className={`flex items-center justify-center rounded-md border border-transparent bg-brand-button-accent px-4 py-3 text-base font-medium text-brand-inverted shadow-sm hover:bg-brand-button-accent-hover sm:px-8 ${className}`}
	>
		{children}
	</ButtonUnstyled>
)

export default Button
