import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // or vue/svelte depending on your framework

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
