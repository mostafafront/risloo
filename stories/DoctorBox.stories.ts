import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

// import { Header } from './Header';
import MainHeader from '@/app/components/organism/mainHeader';
import Psychologies from '@/app/components/template/psychologies';

const meta = {
  title: 'Example/DoctorBox',
  component: Psychologies,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  args: {
    onLogin: fn(),
    onLogout: fn(),
    onCreateAccount: fn(),
  },
} satisfies Meta<typeof Psychologies>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {};
