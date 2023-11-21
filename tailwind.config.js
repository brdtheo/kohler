/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        18: '4.5rem',
      },
      colors: {
        smoke: '#f2f3f5',
        cornflower: '#5865f2',
        eucalyptus: '#23a559',
        shark: '#1e1f22',
        tuna: '#35363c',
        iron: '#dbdee1',
        caviar: '#2b2d31',
        ebony: '#313338',
        onyx: '#383a40',
        crestline: '#b5bac1',
        woodsmoke: '#111214',
        metalise: '#35373c',
        'gluon-grey': '#1a1b1e',
        grass: '#23a55a',
        cheesy: '#f0b232',
        flamingo: '#f23f43',
        charcoal: '#2e3035',
        gunmetal: '#232428',
        shamrock: '#2DC770',
        fuel: '#f0b132',
        begonia: '#fa777c',
        oslo: '#80848e',
        // element specific colors
        scrolltrack: '#202226',
        placeholder: '#6d6f78',
        link: '#00a8fc',
      },
    },
  },
  plugins: [],
};
