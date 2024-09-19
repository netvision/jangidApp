// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///Volumes/Macintosh%20HD/dev/jangidApp/node_modules/.pnpm/vite@5.3.5_@types+node@20.14.13/node_modules/vite/dist/node/index.js";
import Vue from "file:///Volumes/Macintosh%20HD/dev/jangidApp/node_modules/.pnpm/@vitejs+plugin-vue@5.1.1_vite@5.3.5_@types+node@20.14.13__vue@3.4.35_typescript@5.5.4_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import Components from "file:///Volumes/Macintosh%20HD/dev/jangidApp/node_modules/.pnpm/unplugin-vue-components@0.26.0_@babel+parser@7.25.3_rollup@4.19.2_vue@3.4.35_typescript@5.5.4_/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///Volumes/Macintosh%20HD/dev/jangidApp/node_modules/.pnpm/unplugin-auto-import@0.17.8_@vueuse+core@10.11.0_vue@3.4.35_typescript@5.5.4___rollup@4.19.2/node_modules/unplugin-auto-import/dist/vite.js";
import UnoCSS from "file:///Volumes/Macintosh%20HD/dev/jangidApp/node_modules/.pnpm/unocss@0.59.4_postcss@8.4.40_rollup@4.19.2_vite@5.3.5_@types+node@20.14.13_/node_modules/unocss/dist/vite.mjs";
import VueMacros from "file:///Volumes/Macintosh%20HD/dev/jangidApp/node_modules/.pnpm/unplugin-vue-macros@2.11.0_@vueuse+core@10.11.0_vue@3.4.35_typescript@5.5.4___esbuild@0.23.0__lp52ucf7bddwmzeo53yuu3sfem/node_modules/unplugin-vue-macros/dist/vite.mjs";
import VueRouter from "file:///Volumes/Macintosh%20HD/dev/jangidApp/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.2_vue-router@4.4.2_vue@3.4.35_typescript@5.5.4___vue@3.4.35_typescript@5.5.4_/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///Volumes/Macintosh%20HD/dev/jangidApp/node_modules/.pnpm/unplugin-vue-router@0.8.8_rollup@4.19.2_vue-router@4.4.2_vue@3.4.35_typescript@5.5.4___vue@3.4.35_typescript@5.5.4_/node_modules/unplugin-vue-router/dist/index.mjs";
var __vite_injected_original_dirname = "/Volumes/Macintosh HD/dev/jangidApp";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    VueMacros({
      defineOptions: false,
      defineModels: false,
      plugins: {
        vue: Vue({
          script: {
            propsDestructure: true,
            defineModel: true
          }
        })
      }
    }),
    // https://github.com/posva/unplugin-vue-router
    VueRouter(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"]
        }
      ],
      dts: true,
      dirs: [
        "./src/composables"
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS()
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    environment: "jsdom"
  },
  server: {
    host: "localhost"
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVm9sdW1lcy9NYWNpbnRvc2ggSEQvZGV2L2phbmdpZEFwcFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1ZvbHVtZXMvTWFjaW50b3NoIEhEL2Rldi9qYW5naWRBcHAvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1ZvbHVtZXMvTWFjaW50b3NoJTIwSEQvZGV2L2phbmdpZEFwcC92aXRlLmNvbmZpZy50c1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPVwidml0ZXN0XCIgLz5cblxuaW1wb3J0IHBhdGggZnJvbSAnbm9kZTpwYXRoJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCBWdWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcbmltcG9ydCBBdXRvSW1wb3J0IGZyb20gJ3VucGx1Z2luLWF1dG8taW1wb3J0L3ZpdGUnXG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJ1xuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXG5pbXBvcnQgVnVlUm91dGVyIGZyb20gJ3VucGx1Z2luLXZ1ZS1yb3V0ZXIvdml0ZSdcbmltcG9ydCB7IFZ1ZVJvdXRlckF1dG9JbXBvcnRzIH0gZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlcidcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnfi8nOiBgJHtwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyl9L2AsXG4gICAgfSxcbiAgfSxcbiAgcGx1Z2luczogW1xuICAgIFZ1ZU1hY3Jvcyh7XG4gICAgICBkZWZpbmVPcHRpb25zOiBmYWxzZSxcbiAgICAgIGRlZmluZU1vZGVsczogZmFsc2UsXG4gICAgICBwbHVnaW5zOiB7XG4gICAgICAgIHZ1ZTogVnVlKHtcbiAgICAgICAgICBzY3JpcHQ6IHtcbiAgICAgICAgICAgIHByb3BzRGVzdHJ1Y3R1cmU6IHRydWUsXG4gICAgICAgICAgICBkZWZpbmVNb2RlbDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlclxuICAgIFZ1ZVJvdXRlcigpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLWF1dG8taW1wb3J0XG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgICd2dWUnLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgVnVlUm91dGVyQXV0b0ltcG9ydHMsXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBhZGQgYW55IG90aGVyIGltcG9ydHMgeW91IHdlcmUgcmVseWluZyBvblxuICAgICAgICAgICd2dWUtcm91dGVyL2F1dG8nOiBbJ3VzZUxpbmsnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBkdHM6IHRydWUsXG4gICAgICBkaXJzOiBbXG4gICAgICAgICcuL3NyYy9jb21wb3NhYmxlcycsXG4gICAgICBdLFxuICAgICAgdnVlVGVtcGxhdGU6IHRydWUsXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tY29tcG9uZW50c1xuICAgIENvbXBvbmVudHMoe1xuICAgICAgZHRzOiB0cnVlLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3Vub2Nzc1xuICAgIC8vIHNlZSB1bm8uY29uZmlnLnRzIGZvciBjb25maWdcbiAgICBVbm9DU1MoKSxcbiAgXSxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdml0ZXN0LWRldi92aXRlc3RcbiAgdGVzdDoge1xuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBob3N0OiAnbG9jYWxob3N0JyxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBRUEsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sU0FBUztBQUNoQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sZUFBZTtBQUN0QixTQUFTLDRCQUE0QjtBQVZyQyxJQUFNLG1DQUFtQztBQVl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNLEdBQUcsS0FBSyxRQUFRLGtDQUFXLEtBQUssQ0FBQztBQUFBLElBQ3pDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLE1BQ1IsZUFBZTtBQUFBLE1BQ2YsY0FBYztBQUFBLE1BQ2QsU0FBUztBQUFBLFFBQ1AsS0FBSyxJQUFJO0FBQUEsVUFDUCxRQUFRO0FBQUEsWUFDTixrQkFBa0I7QUFBQSxZQUNsQixhQUFhO0FBQUEsVUFDZjtBQUFBLFFBQ0YsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLElBR0QsVUFBVTtBQUFBO0FBQUEsSUFHVixXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsVUFFRSxtQkFBbUIsQ0FBQyxTQUFTO0FBQUEsUUFDL0I7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsUUFDSjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQTtBQUFBLElBR0QsV0FBVztBQUFBLE1BQ1QsS0FBSztBQUFBLElBQ1AsQ0FBQztBQUFBO0FBQUE7QUFBQSxJQUlELE9BQU87QUFBQSxFQUNUO0FBQUE7QUFBQSxFQUdBLE1BQU07QUFBQSxJQUNKLGFBQWE7QUFBQSxFQUNmO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
