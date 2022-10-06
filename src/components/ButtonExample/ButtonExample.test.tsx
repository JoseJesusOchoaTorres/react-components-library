import { render } from '@testing-library/react'
import React from 'react'

import ButtonExample from './ButtonExample'

describe('ButtonExample', () => {
	test('renders the Button component', () => {
		render(<ButtonExample title="Hello world!">Hey there</ButtonExample>)
	})
})
