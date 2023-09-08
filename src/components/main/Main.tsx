import { component$ } from '@builder.io/qwik';

export type MainProps = {
  title?: string;
  description?: string;
};

export default component$<MainProps>(
  ({ title = 'Won Games', description = 'Purchase online games' }) => {
    return (
      <main>
        <img src="img/hero-illustration.svg" />
        <h1>{title}</h1>
        <h2>{description}</h2>
      </main>
    );
  }
);
