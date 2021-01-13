import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [reactRefresh()],
  alias: {
    'vue': 'reactivue',
    '@vue/runtime-dom': 'reactivue',
  },
  dedupe:['react', 'react-dom'],
  optimizeDeps: {
    exclude:['@vue/reactivity']
  }
})
