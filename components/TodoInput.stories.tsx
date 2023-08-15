import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TodoInput, TodoInputProps } from './TodoInput';

export default {
  title: 'Todo/TodoInput',
  component: TodoInput,
} as Meta;

const Template: StoryFn<TodoInputProps> = (args: TodoInputProps) => <TodoInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  onAdd: () => {}
};
