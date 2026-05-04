import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // لضمان عمل الموقع بدون إنترنت وتخزين الملفات الأساسية
      includeAssets: ['favicon.png', 'robots.txt', 'icon-zahi.png', 'sitemap.xml'],
      manifest: {
        name: 'مأوى زاهي بويبلان - Gîte Zahi',
        short_name: 'مأوى زاهي',
        description: 'موقع مأوى زاهي بويبلان السياحي',
        theme_color: '#7c8a71',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'icon-zahi.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-zahi.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      workbox: {
        // تخزين الصور والفيديوهات والملفات لزيادة سرعة الموقع
        globPatterns: ['**/*.{js,css,html,png,jpg,svg,ico}'],
      }
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});