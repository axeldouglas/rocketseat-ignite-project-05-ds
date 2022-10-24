import type { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@ignite-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>;

export const Default: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong lorem ipsum',
    as: 'strong',
  },
};
