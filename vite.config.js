import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/shinkyowa/', // ★ ここが重要
  plugins: [react()],
})
