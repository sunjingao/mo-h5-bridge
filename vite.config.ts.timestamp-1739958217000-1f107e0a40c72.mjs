// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/projects/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-util/node_modules/.pnpm/vite@5.2.12_sass@1.77.4_terser@5.31.1/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/projects/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-util/node_modules/.pnpm/@vitejs+plugin-vue@5.0.5_vite@5.2.12_sass@1.77.4_terser@5.31.1__vue@3.4.27_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import unoCSS from "file:///D:/projects/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-util/node_modules/.pnpm/unocss@0.60.4_postcss@8.4.38_rollup@4.18.0_vite@5.2.12_sass@1.77.4_terser@5.31.1_/node_modules/unocss/dist/vite.mjs";
import eslintPlugin from "file:///D:/projects/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-util/node_modules/.pnpm/vite-plugin-eslint@1.8.1_eslint@9.4.0_vite@5.2.12_sass@1.77.4_terser@5.31.1_/node_modules/vite-plugin-eslint/dist/index.mjs";
import stylelintPlugin from "file:///D:/projects/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-util/node_modules/.pnpm/vite-plugin-stylelint@5.3.1_postcss@8.4.38_rollup@4.18.0_stylelint@16.6.1_typescript@5.4.5__v_syctlevscz6xbciy7mv4wfbjca/node_modules/vite-plugin-stylelint/dist/index.mjs";
import markedPreview from "file:///D:/projects/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-util/node_modules/.pnpm/vite-plugin-doc-preview@0.2.1/node_modules/vite-plugin-doc-preview/dist/index.js";
import dts from "file:///D:/projects/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-util/node_modules/.pnpm/vite-plugin-dts@4.5.0_rollup@4.18.0_typescript@5.4.5_vite@5.2.12_sass@1.77.4_terser@5.31.1_/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///D:/projects/%E9%87%8D%E6%9E%84%E7%9A%84%E9%A1%B9%E7%9B%AE/mobje-web-util/vite.config.ts";
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
        name: "mo-front-end-util"
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
      // 生成 .d.ts 文件
      insertTypesEntry: true
      // 在 package.json 中自动生成 types 字段
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxcdTkxQ0RcdTY3ODRcdTc2ODRcdTk4NzlcdTc2RUVcXFxcbW9iamUtd2ViLXV0aWxcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXHByb2plY3RzXFxcXFx1OTFDRFx1Njc4NFx1NzY4NFx1OTg3OVx1NzZFRVxcXFxtb2JqZS13ZWItdXRpbFxcXFx2aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovcHJvamVjdHMvJUU5JTg3JThEJUU2JTlFJTg0JUU3JTlBJTg0JUU5JUExJUI5JUU3JTlCJUFFL21vYmplLXdlYi11dGlsL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHtmaWxlVVJMVG9QYXRoLCBVUkx9IGZyb20gJ25vZGU6dXJsJztcbmltcG9ydCB7ZGVmaW5lQ29uZmlnfSBmcm9tICd2aXRlJztcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJztcbmltcG9ydCB1bm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnO1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnO1xuaW1wb3J0IHN0eWxlbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1zdHlsZWxpbnQnO1xuaW1wb3J0IG1hcmtlZFByZXZpZXcgZnJvbSAndml0ZS1wbHVnaW4tZG9jLXByZXZpZXcnXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSAncm9sbHVwLXBsdWdpbi12aXN1YWxpemVyJztcblxuY29uc3QgREVWX0NPTkZJRyA9IHtcbiAgY29uZmlnOiB7XG4gICAgYmFzZTogJycsXG4gICAgc2VydmVyOiB7XG4gICAgICBob3N0OiAnMC4wLjAuMCcsXG4gICAgICBwb3J0OiA2Njk5LFxuICAgICAgb3BlbjogdHJ1ZVxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoe1xuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxuICAgIH0pLFxuICAgIHVub0NTUygpLFxuICAgIG1hcmtlZFByZXZpZXcoKSxcbiAgICBlc2xpbnRQbHVnaW4oe1xuICAgICAgY2FjaGU6IGZhbHNlLFxuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAnZG9jLyoqLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAnZG9jLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAnKi57anMsdHN9JyxcbiAgICAgICAgJ3BhY2thZ2UvKiovKi57anMsdHMsdnVlfScsXG4gICAgICAgICdwYWNrYWdlLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgXSxcbiAgICAgIGZpeDogdHJ1ZVxuICAgIH0pLFxuICBdXG59XG5cbmNvbnN0IERPQ1NfQ09ORklHID0ge1xuICBjb25maWc6IHtcbiAgICBiYXNlOiAnLi8nLFxuICAgIGJ1aWxkOiB7XG4gICAgICBvdXREaXI6IGBkaXN0LWRvY2AsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIHZ1ZSh7XG4gICAgICBpbmNsdWRlOiBbL1xcLnZ1ZSQvLCAvXFwubWQkL10sXG4gICAgfSksXG4gICAgdW5vQ1NTKCksXG4gICAgbWFya2VkUHJldmlldygpLFxuICAgIGVzbGludFBsdWdpbih7XG4gICAgICBjYWNoZTogZmFsc2UsXG4gICAgICBpbmNsdWRlOiBbXG4gICAgICAgICdkb2MvKiovKi57anMsdHMsdnVlfScsXG4gICAgICAgICdkb2MvKi57anMsdHMsdnVlfScsXG4gICAgICAgICdwYWNrYWdlLyoqLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgICAncGFja2FnZS8qLntqcyx0cyx2dWV9JyxcbiAgICAgIF0sXG4gICAgICBmaXg6IHRydWVcbiAgICB9KSxcbiAgICBzdHlsZWxpbnRQbHVnaW4oe1xuICAgICAgaW5jbHVkZTogW1xuICAgICAgICAnZG9jLyoqLyoue2NzcyxzY3NzLGxlc3N9JyxcbiAgICAgICAgJ2RvYy8qLntjc3Msc2NzcyxsZXNzfScsXG4gICAgICAgICdwYWNrYWdlLyoqLyoue2NzcyxzY3NzLGxlc3N9JyxcbiAgICAgICAgJ3BhY2thZ2UvKi57Y3NzLHNjc3MsbGVzc30nLFxuICAgICAgXSxcbiAgICAgIGZpeDogdHJ1ZVxuICAgIH0pXG4gIF1cbn1cblxuY29uc3QgUEFDS0FHRVNfQ09ORklHID0ge1xuICBjb25maWc6IHtcbiAgICBiYXNlOiAnLi8nLFxuICAgIGJ1aWxkOiB7XG4gICAgICBsaWI6IHtcbiAgICAgICAgZW50cnk6ICcuL3BhY2thZ2UvbWFpbi50cycsXG4gICAgICAgIG5hbWU6ICdtby1mcm9udC1lbmQtdXRpbCcsXG4gICAgICB9LFxuICAgICAgc291cmNlbWFwOiB0cnVlLFxuICAgICAgb3V0RGlyOiAnZGlzdCdcbiAgICB9LFxuICB9LFxuICBwbHVnaW5zOiBbXG4gICAgZXNsaW50UGx1Z2luKHtcbiAgICAgIGNhY2hlOiBmYWxzZSxcbiAgICAgIGluY2x1ZGU6IFtcbiAgICAgICAgJ3BhY2thZ2UvKiovKi57anMsdHMsdnVlfScsXG4gICAgICAgICdwYWNrYWdlLyoue2pzLHRzLHZ1ZX0nLFxuICAgICAgXSxcbiAgICAgIGZpeDogdHJ1ZVxuICAgIH0pLFxuICAgIGR0cyh7IC8vIFx1NzUxRlx1NjIxMCAuZC50cyBcdTY1ODdcdTRFRjZcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsIC8vIFx1NTcyOCBwYWNrYWdlLmpzb24gXHU0RTJEXHU4MUVBXHU1MkE4XHU3NTFGXHU2MjEwIHR5cGVzIFx1NUI1N1x1NkJCNVxuICAgIH0pLFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoe21vZGV9KSA9PiB7XG4gIGNvbnN0IHZpdGVDb25maWcgPSBtb2RlID09PSAnZGV2JyA/IERFVl9DT05GSUcgOiAoXG4gICAgbW9kZSA9PT0gJ2RvYycgPyBET0NTX0NPTkZJRyA6IFBBQ0tBR0VTX0NPTkZJR1xuICApXG5cbiAgcmV0dXJuIHtcbiAgICAuLi52aXRlQ29uZmlnLmNvbmZpZyxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9wYWNrYWdlJywgaW1wb3J0Lm1ldGEudXJsKSksXG4gICAgICAgICdAZG9jJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL2RvYycsIGltcG9ydC5tZXRhLnVybCkpLFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBwbHVnaW5zOiBbXG4gICAgICAuLi52aXRlQ29uZmlnLnBsdWdpbnMsXG4gICAgXVxuICB9O1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWtVLFNBQVEsZUFBZSxXQUFVO0FBQ25XLFNBQVEsb0JBQW1CO0FBQzNCLE9BQU8sU0FBUztBQUNoQixPQUFPLFlBQVk7QUFDbkIsT0FBTyxrQkFBa0I7QUFDekIsT0FBTyxxQkFBcUI7QUFDNUIsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBUCtKLElBQU0sMkNBQTJDO0FBVWhPLElBQU0sYUFBYTtBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0YsU0FBUyxDQUFDLFVBQVUsT0FBTztBQUFBLElBQzdCLENBQUM7QUFBQSxJQUNELE9BQU87QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLGFBQWE7QUFBQSxNQUNYLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxFQUNIO0FBQ0Y7QUFFQSxJQUFNLGNBQWM7QUFBQSxFQUNsQixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxVQUFVLE9BQU87QUFBQSxJQUM3QixDQUFDO0FBQUEsSUFDRCxPQUFPO0FBQUEsSUFDUCxjQUFjO0FBQUEsSUFDZCxhQUFhO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNELGdCQUFnQjtBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsRUFDSDtBQUNGO0FBRUEsSUFBTSxrQkFBa0I7QUFBQSxFQUN0QixRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUEsUUFDSCxPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsTUFDUjtBQUFBLE1BQ0EsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxhQUFhO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxJQUFJO0FBQUE7QUFBQSxNQUNGLGtCQUFrQjtBQUFBO0FBQUEsSUFDcEIsQ0FBQztBQUFBLEVBQ0g7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUMsS0FBSSxNQUFNO0FBQ3RDLFFBQU0sYUFBYSxTQUFTLFFBQVEsYUFDbEMsU0FBUyxRQUFRLGNBQWM7QUFHakMsU0FBTztBQUFBLElBQ0wsR0FBRyxXQUFXO0FBQUEsSUFDZCxTQUFTO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLGFBQWEsd0NBQWUsQ0FBQztBQUFBLFFBQ3hELFFBQVEsY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsTUFDekQ7QUFBQSxJQUNGO0FBQUEsSUFFQSxTQUFTO0FBQUEsTUFDUCxHQUFHLFdBQVc7QUFBQSxJQUNoQjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
