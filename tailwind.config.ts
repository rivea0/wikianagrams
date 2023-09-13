import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // 'steel-blue-50': '#f4f6fb',
        // 'steel-blue-100': '#e7edf7',
        // 'steel-blue-200': '#cad9ed',
        // 'steel-blue-300': '#9bb8de',
        // 'steel-blue-400': '#6594cb',
        // 'steel-blue-500': '#3f72af',
        // 'steel-blue-600': '#305c99',
        // 'steel-blue-700': '#284a7c',
        // 'steel-blue-800': '#254167',
        // 'steel-blue-900': '#233857',
        // 'steel-blue-950': '#17243a'
          'san-marino-50': '#f4f6fb',
          'san-marino-100': '#e7edf7',
          'san-marino-200': '#cad9ed',
          'san-marino-300': '#9bb8de',
          'san-marino-400': '#6594cb',
          'san-marino-500': '#3f72af',
          'san-marino-600': '#305c99',
          'san-marino-700': '#284a7c',
          'san-marino-800': '#254167',
          'san-marino-900': '#233857',
          'san-marino-950': '#17243a',
    
      }
    },
  },
  plugins: [],
}
export default config
