// Dependencies
import ButtonUnstyled from '@mui/base/ButtonUnstyled'
import * as React from 'react'

// Types
import { ButtonExampleProps } from './ButtonExample.types'

// Styles
import './ButtonExample.css'

/**
 * ALERT: This is a component example used as an instance to create new ones.
 * Please don't use it in production.
 */
const ButtonExample = ({
	children,
	className = '',
	title = '',
}: ButtonExampleProps) => (
	<ButtonUnstyled
		title={title}
		className={`flex items-center justify-center rounded-md border border-transparent bg-brand-primary-100 px-4 py-3 font-rokkitt text-base font-medium text-brand-light shadow-sm hover:bg-brand-primary-90 sm:px-8 ${className}`}
	>
		{children}
	</ButtonUnstyled>
)

export default ButtonExample
