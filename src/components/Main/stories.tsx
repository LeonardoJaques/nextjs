import { Meta, Story } from '@storybook/react/types-6-0'
import Main from '.'

export default {
  title: 'Main',
  component: Main
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.args = {
  title: 'React Avançado - basic',
  description: 'TypeScript, ReactJS, NextJS e Styled Components - basic'
}
export const Default: Story = (args) => <Main {...args} />
