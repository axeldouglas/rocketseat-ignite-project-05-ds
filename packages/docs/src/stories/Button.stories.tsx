import type { StoryObj, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@ignite-ui/react';

export default {
  title: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
};

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
};
