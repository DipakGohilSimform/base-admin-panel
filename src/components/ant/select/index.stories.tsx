import type { Meta, StoryObj } from '@storybook/react'
import { Select } from '.'

const meta: Meta<typeof Select> = {
  title: 'Ant Design/Select',
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: { control: 'radio', options: ['small', 'medium', 'large'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    placeholder: { control: 'text' }
  },
  component: Select
}

export default meta

type Story = StoryObj<typeof Select>

export const Demo: Story = {
  args: {
    options: [
      { value: 'jack', label: 'Jack' },
      { value: 'lucy', label: 'Lucy' },
      { value: 'Yiminghe', label: 'yiminghe' },
      { value: 'disabled', label: 'Disabled', disabled: true }
    ],
    placeholder: 'Select an option',
    size: 'large',
    disabled: false,
    loading: false
  }
}
