export default {
  npmClient: 'pnpm',
  apiRoute: {
    platform: 'vercel'
  },
  routes: [
    { path: '/login', component: 'login' },
  ],
  plugins: [require.resolve('@umijs/plugins/dist/tailwindcss')],
  tailwindcss: {}
};
