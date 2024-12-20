import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

/** @type {import('vite').UserConfig} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true, // use `describe, it, test` without importing them
    environment: 'jsdom',
    setupFiles: './__tests__/setup.ts',
    css: {
      include: /.+/
    }
  },
}
