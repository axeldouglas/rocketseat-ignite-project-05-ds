import type { StoryObj, Meta } from '@storybook/react';
import { Box, Text, TextInput, TextInputProps } from '@rocketseat-ignite-ui/react';

export default {
  title: 'Form/Text Input',
  component: TextInput,
  args: {},
  argTypes: {},
  decorators: [
    (story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Input label</Text>
          {story()}
        </Box>
      );
    },
  ],
} as Meta<TextInputProps>;

export const Default: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
};

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'prefix text/',
  },
};
