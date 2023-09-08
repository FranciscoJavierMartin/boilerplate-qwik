import { component$ } from '@builder.io/qwik';

export type MainProps = {
  title?: string;
  description?: string;
};

export default component$<MainProps>(
  ({ title = 'Won Games', description = 'Purchase online games' }) => {
    return (
      <main class='bg-blue-950 text-white w-full h-full p-12 text-center flex flex-col items-center justify-center'>
        <h1 class='text-4xl'>{title}</h1>
        <h2 class='text-3xl font-normal'>{description}</h2>
        {/* eslint-disable-next-line qwik/jsx-img*/}
        <img
          class='mt-12'
          src='img/hero-illustration.svg'
          style={{ width: 'min(30rem, 100%)', height: 'auto' }}
        />
      </main>
    );
  }
);
