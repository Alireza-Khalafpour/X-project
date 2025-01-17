import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        xsm:'500px',
        sm:'600px',
        md:'690px',
        lg:'988px',
        xl:'1078px',
        xxl:'1265px',
      },
      colors:{
        textGray:"#71767b",
        textGrayLite:"#e7e9ea",
        borderGray:"#2f3336",
        inputGray:"#202327",
        iconBlue:"#1d9bf0",
        iconGreen:"#08ba7c",
        iconPink:"#f91880"
      },
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [],
}
export default config
