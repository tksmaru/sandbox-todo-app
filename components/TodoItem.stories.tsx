// components/TodoItem.stories.tsx

import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import { TodoItem, TodoItemProps } from './TodoItem';

export default {
  title: 'Todo/TodoItem',
  component: TodoItem,
} as Meta;

const Template: StoryFn<TodoItemProps> = (args: TodoItemProps) => <TodoItem {...args} />;

export const Uncompleted = Template.bind({});
Uncompleted.args = {
  todo: { id: 1, text: 'Next.js の勉強', completed: false, archived: false },
  onToggle: () => {},
  onArchive: () => {},
  isHovered: false
};

export const Completed = Template.bind({});
Completed.args = {
  todo: { id: 2, text: 'React の勉強', completed: true, archived: false },
  onToggle: () => {},
  onArchive: () => {},
  isHovered: false
};

export const Hovered = Template.bind({});
Hovered.args = {
  todo: { id: 3, text: 'Storybook の勉強', completed: false, archived: false },
  onToggle: () => {},
  onArchive: () => {},
  isHovered: true
};
