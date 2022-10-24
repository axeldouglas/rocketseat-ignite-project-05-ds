import type { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps } from '@ignite-ui/react';

export default {
  title: 'Box',
  component: Box,
  args: {
    children: (
      <>
        <span>Box Component</span>
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>;

export const Default: StoryObj<BoxProps> = {};
