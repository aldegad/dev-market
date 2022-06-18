/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: "media", /** class 로 하면 js에서 컨트롤하게 됨. dark 클래스를 추가하면 됨 */
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
