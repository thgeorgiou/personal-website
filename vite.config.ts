import { resolve } from "path";
import fs from "fs";
import matter from "gray-matter";
import { defineConfig } from "vite";
import Vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import Pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Pages({
      extensions: ["vue", "md"],
      dirs: [{ baseRoute: "", dir: "src/pages" }],
    }),
    Markdown({}),
  ],
});
