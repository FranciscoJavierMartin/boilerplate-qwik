import type { Meta, StoryObj } from 'storybook-framework-qwik';
import Main, { type MainProps } from './Main';

const meta: Meta<MainProps> = {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Primary: StoryObj<MainProps> = {
  args: {
    title: 'Basic title',
    description: 'Basic description',
  },
};
