import type { Meta, StoryObj } from 'storybook-framework-qwik';
import Mio, { type MioProps } from './Mio';

const meta: Meta<MioProps> = {
  title: 'Mio',
  component: Mio,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const Default: StoryObj<MioProps> = {};
