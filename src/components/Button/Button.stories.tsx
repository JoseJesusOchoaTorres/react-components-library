import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import UserThin from '../../icons/UsersThin'
import Button from './Button'

export default {
	title: 'Example/Button',
	component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
	title: 'Title example 1',
	className: 'text-3xl font-bold underline',
	children: 'Button 1',
}

export const Icon = Template.bind({})
Icon.args = {
	title: 'Icon button',
	children: <UserThin width="2rem" height="2rem" className="text-pink-800" />,
}
