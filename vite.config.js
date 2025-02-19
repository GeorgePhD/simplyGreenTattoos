import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access over LAN
    port: 5173, // Optional: specify a port (default is 5173)
  },
})
