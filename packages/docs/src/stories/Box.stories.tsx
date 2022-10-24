import type { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps, Text } from '@ignite-ui/react';

export default {
  title: 'Box',
  component: Box,
  args: {
    children: <Text>Box Component</Text>,
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
