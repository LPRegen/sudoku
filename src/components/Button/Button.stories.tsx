import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

export const NewGame: Story = {
  name: 'New game',
  render: () => <Button>New Game</Button>,
};

export const ResumeGame: Story = {
  render: () => <Button>Resume game</Button>,
};

export const EasyDifficulty: Story = {
  render: () => <Button>Easy</Button>,
};

export const MediumDifficulty: Story = {
  render: () => <Button>Medium</Button>,
};

export const HardDifficulty: Story = {
  render: () => <Button>Hard</Button>,
};
