import adapter from '@sveltejs/adapter-static';

const config = {
  kit: {
    adapter: adapter({
      pages: 'dist',
      assets: 'dist',
      fallback: 'index.html'
    }),
    paths: {
      base: '/actividad-cicd'
    }
  }
};

export default config;
