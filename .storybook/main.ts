import { StorybookConfig } from 'storybook-framework-qwik';
import { InlineConfig } from 'vite';

const config: StorybookConfig = {
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-styling',
      options: {
        postCss: {
          implementation: require.resolve('postcss'),
        },
      },
    },
  ],

  framework: {
    name: 'storybook-framework-qwik',
  },

  core: {
    renderer: 'storybook-framework-qwik',
    disableTelemetry: true,
  },

  stories: ['../src/components/**/*.stories.tsx'],

  viteFinal: async (config: InlineConfig) => {
    return config;
  },

  docs: {
    autodocs: true,
  },
};

export default config;
