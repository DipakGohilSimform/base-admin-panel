import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '.'

const meta: Meta<typeof Button> = {
  title: 'Ant Design/Button',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    type: {
      control: 'radio',
      options: ['primary', 'dashed', 'link', 'text', 'default']
    },
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    danger: { control: 'boolean' },
    ghost: { control: 'boolean' },
    block: { control: 'boolean' },
    icon: { control: HTMLElement }
  },
  component: Button
}

export default meta

type Story = StoryObj<typeof Button>

export const Demo: Story = {
  args: {
    children: 'Button',
    type: 'primary',
    size: 'large',
    disabled: false,
    loading: false,
    danger: false,
    ghost: false,
    block: false
  }
}
