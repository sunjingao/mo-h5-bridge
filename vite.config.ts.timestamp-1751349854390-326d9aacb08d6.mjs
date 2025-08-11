// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mo-h5-bridge/node_modules/.pnpm/vite@5.2.12_sass@1.77.4_terser@5.31.1/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mo-h5-bridge/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vi_8d1f1ad8b8a8af70b2c758326926f798/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import unoCSS from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mo-h5-bridge/node_modules/.pnpm/unocss@0.60.4_postcss@8.4.3_439f50b10ccb95d33972ec4d7f99a69d/node_modules/unocss/dist/vite.mjs";
import eslintPlugin from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mo-h5-bridge/node_modules/.pnpm/vite-plugin-eslint@1.8.1_es_eb29e750d8240d220f2b07c2aa2483c4/node_modules/vite-plugin-eslint/dist/index.mjs";
import stylelintPlugin from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mo-h5-bridge/node_modules/.pnpm/vite-plugin-stylelint@5.3.1_7d7616a924c9c1b40376fe3c6f20864c/node_modules/vite-plugin-stylelint/dist/index.mjs";
import markedPreview from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mo-h5-bridge/node_modules/.pnpm/vite-plugin-doc-preview@0.2.1/node_modules/vite-plugin-doc-preview/dist/index.js";
import dts from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mo-h5-bridge/node_modules/.pnpm/vite-plugin-dts@4.5.0_rollu_6a3244b00f4c0f9a956f3d27805f5fba/node_modules/vite-plugin-dts/dist/index.mjs";
import { visualizer } from "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mo-h5-bridge/node_modules/.pnpm/rollup-plugin-visualizer@5.12.0_rollup@4.18.0/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/project/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mo-h5-bridge/vite.config.ts";
var DEV_CONFIG = {
  config: {
    base: "",
    server: {
      host: "0.0.0.0",
      port: 6699,
      open: true
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    unoCSS(),
    markedPreview(),
    eslintPlugin({
      cache: false,
      include: [
        "doc/**/*.{js,ts,vue}",
        "doc/*.{js,ts,vue}",
        "*.{js,ts}",
        "package/**/*.{js,ts,vue}",
        "package/*.{js,ts,vue}"
      ],
      fix: true
    })
  ]
};
var DOCS_CONFIG = {
  config: {
    base: "./",
    build: {
      outDir: `dist-doc`
    }
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/]
    }),
    unoCSS(),
    markedPreview(),
    eslintPlugin({
      cache: false,
      include: [
        "doc/**/*.{js,ts,vue}",
        "doc/*.{js,ts,vue}",
        "package/**/*.{js,ts,vue}",
        "package/*.{js,ts,vue}"
      ],
      fix: true
    }),
    stylelintPlugin({
      include: [
        "doc/**/*.{css,scss,less}",
        "doc/*.{css,scss,less}",
        "package/**/*.{css,scss,less}",
        "package/*.{css,scss,less}"
      ],
      fix: true
    })
  ]
};
var PACKAGES_CONFIG = {
  config: {
    base: "./",
    build: {
      lib: {
        entry: "./package/main.ts",
        name: "mo-h5-bridge"
      },
      sourcemap: true,
      outDir: "dist"
    }
  },
  plugins: [
    eslintPlugin({
      cache: false,
      include: [
        "package/**/*.{js,ts,vue}",
        "package/*.{js,ts,vue}"
      ],
      fix: true
    }),
    dts({
      rollupTypes: true,
      mainEntryPointFilePath: "./dist/index.d.ts"
    }),
    visualizer({
      open: true
    })
  ]
};
var vite_config_default = defineConfig(({ mode }) => {
  const viteConfig = mode === "dev" ? DEV_CONFIG : mode === "doc" ? DOCS_CONFIG : PACKAGES_CONFIG;
  return {
    ...viteConfig.config,
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./package", __vite_injected_original_import_meta_url)),
        "@doc": fileURLToPath(new URL("./doc", __vite_injected_original_import_meta_url))
      }
    },
    plugins: [
      ...viteConfig.plugins
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0XFxcXFx1OTFDRFx1Njc4NFx1NzY4NFx1OTg3OVx1NzZFRVxcXFxtby1oNS1icmlkZ2VcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RcXFxcXHU5MUNEXHU2Nzg0XHU3Njg0XHU5ODc5XHU3NkVFXFxcXG1vLWg1LWJyaWRnZVxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdC8lRTklODclOEQlRTYlOUUlODQlRTclOUElODQlRTklQTElQjklRTclOUIlQUUvbW8taDUtYnJpZGdlL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtmaWxlVVJMVG9QYXRoLCBVUkx9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB1bm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnO1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnO1xuaW1wb3J0IHN0eWxlbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zdHlsZWxpbnQnO1xuaW1wb3J0IG1hcmtlZFByZXZpZXcgZnJvbSAndml0ZS1wbHVnaW4tZG9jLXByZXZpZXcnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcblxuY29uc3QgREVWX0NPTkZJRyA9IHtcbiAgY29uZmlnOiB7XG4gICAgYmFzZTogJycsXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgICBwb3J0OiA2Njk5LFxuICAgICAgb3BlbjogdHJ1ZVxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoe1xuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxuICAgIH0pLFxuICAgIHVub0NTUygpLFxuICAgIG1hcmtlZFByZXZpZXcoKSxcbiAgICBlc2xpbnRQbHVnaW4oe1xuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAnZG9jLyoqLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAnZG9jLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAnKi57anMsdHN9JyxcbiAgICAgICAgJ3BhY2thZ2UvKiovKi57anMsdHMsdnVlfScsXG4gICAgICAgICdwYWNrYWdlLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgXSxcbiAgICAgIGZpeDogdHJ1ZVxuICAgIH0pLFxuICBdXG59XG5cbmNvbnN0IERPQ1NfQ09ORklHID0ge1xuICBjb25maWc6IHtcbiAgICBiYXNlOiAnLi8nLFxuICAgIGJ1aWxkOiB7XG4gICAgICBvdXREaXI6IGBkaXN0LWRvY2AsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgfSksXG4gICAgdW5vQ1NTKCksXG4gICAgbWFya2VkUHJldmlldygpLFxuICAgIGVzbGludFBsdWdpbih7XG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgICdkb2MvKiovKi57anMsdHMsdnVlfScsXG4gICAgICAgICdkb2MvKi57anMsdHMsdnVlfScsXG4gICAgICAgICdwYWNrYWdlLyoqLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAncGFja2FnZS8qLntqcyx0cyx2dWV9JyxcbiAgICAgIF0sXG4gICAgICBmaXg6IHRydWVcbiAgICB9KSxcbiAgICBzdHlsZWxpbnRQbHVnaW4oe1xuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAnZG9jLyoqLyoue2NzcyxzY3NzLGxlc3N9JyxcbiAgICAgICAgJ2RvYy8qLntjc3Msc2NzcyxsZXNzfScsXG4gICAgICAgICdwYWNrYWdlLyoqLyoue2NzcyxzY3NzLGxlc3N9JyxcbiAgICAgICAgJ3BhY2thZ2UvKi57Y3NzLHNjc3MsbGVzc30nLFxuICAgICAgXSxcbiAgICAgIGZpeDogdHJ1ZVxuICAgIH0pXG4gIF1cbn1cblxuY29uc3QgUEFDS0FHRVNfQ09ORklHID0ge1xuICBjb25maWc6IHtcbiAgICBiYXNlOiAnLi8nLFxuICAgIGJ1aWxkOiB7XG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6ICcuL3BhY2thZ2UvbWFpbi50cycsXG4gICAgICAgIG5hbWU6ICdtby1oNS1icmlkZ2UnLFxuICAgICAgfSxcbiAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcbiAgICAgIG91dERpcjogJ2Rpc3QnXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIGVzbGludFBsdWdpbih7XG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgICdwYWNrYWdlLyoqLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAncGFja2FnZS8qLntqcyx0cyx2dWV9JyxcbiAgICAgIF0sXG4gICAgICBmaXg6IHRydWVcbiAgICB9KSxcbiAgICBkdHMoe1xuICAgICAgcm9sbHVwVHlwZXM6IHRydWUsXG4gICAgICBtYWluRW50cnlQb2ludEZpbGVQYXRoOiAnLi9kaXN0L2luZGV4LmQudHMnXG4gICAgfSksXG4gICAgdmlzdWFsaXplcih7XG4gICAgICBvcGVuOiB0cnVlXG4gICAgfSlcbiAgXVxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHttb2RlfSkgPT4ge1xuICBjb25zdCB2aXRlQ29uZmlnID0gbW9kZSA9PT0gJ2RldicgPyBERVZfQ09ORklHIDogKFxuICAgIG1vZGUgPT09ICdkb2MnID8gRE9DU19DT05GSUcgOiBQQUNLQUdFU19DT05GSUdcbiAgKVxuXG4gIHJldHVybiB7XG4gICAgLi4udml0ZUNvbmZpZy5jb25maWcsXG4gICAgcmVzb2x2ZToge1xuICAgICAgYWxpYXM6IHtcbiAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vcGFja2FnZScsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgICAnQGRvYyc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9kb2MnLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgcGx1Z2luczogW1xuICAgICAgLi4udml0ZUNvbmZpZy5wbHVnaW5zLFxuICAgIF1cbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VCxTQUFRLGVBQWUsV0FBVTtBQUMxVixTQUFRLG9CQUFtQjtBQUMzQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sU0FBUztBQUNoQixTQUFTLGtCQUFrQjtBQVI4SSxJQUFNLDJDQUEyQztBQVUxTixJQUFNLGFBQWE7QUFBQSxFQUNqQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxVQUFVLE9BQU87QUFBQSxJQUM3QixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxjQUFjO0FBQUEsSUFDZCxhQUFhO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsRUFDSDtBQUNGO0FBRUEsSUFBTSxjQUFjO0FBQUEsRUFDbEIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixTQUFTLENBQUMsVUFBVSxPQUFPO0FBQUEsSUFDN0IsQ0FBQztBQUFBLElBQ0QsT0FBTztBQUFBLElBQ1AsY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxnQkFBZ0I7QUFBQSxNQUNkLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUVBLElBQU0sa0JBQWtCO0FBQUEsRUFDdEIsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLFFBQ0gsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsYUFBYTtBQUFBLE1BQ1gsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBLElBQ0QsSUFBSTtBQUFBLE1BQ0YsYUFBYTtBQUFBLE1BQ2Isd0JBQXdCO0FBQUEsSUFDMUIsQ0FBQztBQUFBLElBQ0QsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUMsS0FBSSxNQUFNO0FBQ3RDLFFBQU0sYUFBYSxTQUFTLFFBQVEsYUFDbEMsU0FBUyxRQUFRLGNBQWM7QUFHakMsU0FBTztBQUFBLElBQ0wsR0FBRyxXQUFXO0FBQUEsSUFDZCxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLGFBQWEsd0NBQWUsQ0FBQztBQUFBLFFBQ3hELFFBQVEsY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDekQ7QUFBQSxJQUNGO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUCxHQUFHLFdBQVc7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
