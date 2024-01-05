import { Meta, StoryObj } from '@storybook/react'
import Nav from '.'

const meta: Meta<typeof Nav> = {
  title: 'Custom/Nav',
  component: Nav
}

export default meta

type Story = StoryObj<typeof Nav>

export const Demo: Story = {}
