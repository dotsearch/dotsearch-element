import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'dotsearch-element',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  devServer: {
    port: 4444,
    address: '0.0.0.0',
  }
};
