import type { Meta, StoryObj } from '@storybook/react';
import { Box, Text, TextArea, TextAreaProps } from '@rocketseat-ignite-ui/react';

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Textarea label</Text>
          {Story()}
        </Box>
      );
    },
  ],
} as Meta<TextAreaProps>;

export const Default: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
};
