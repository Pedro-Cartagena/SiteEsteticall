import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Mudamos de @vitejs/react-swc para este
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})