/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ // path to all files that use tailwind utility classes; ** means everywhere in directory, not just direct children
    './pages/**/*.jsx',
    './components/**/*.jsx',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
