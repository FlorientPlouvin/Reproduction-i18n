// vitest.config.ts

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
    }),
  ],
  test: {
    exclude: [
      "**/node_modules/**",
      "**/dist/**",
      "**/cypress/**",
      "**/.{idea,git,cache,output,temp}/**",
      "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
      "**/*.story.vue",
    ],
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "lcov"],
      exclude: [
        "**/node_modules/**",
        "**/dist/**",
        "**/cypress/**",
        "**/.{idea,git,cache,output,temp}/**",
        "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
        "**/*.story.vue",
      ],
    },
  },
});
