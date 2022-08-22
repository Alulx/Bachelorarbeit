import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(
    {
      postcss: true,
    },
  ),

  kit: {
    adapter: adapter(
      {
        pages: 'dist',
        assets: 'dist',
        fallback: 'index.html',
      },
    ),
    paths: {
      base: process.env.NODE_ENV === 'development' ?
        '' :
        '/digitalx-mint-drops/digitalx-mint-factory',
    },
  },
};

export default config;
