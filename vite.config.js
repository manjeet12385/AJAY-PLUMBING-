import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        about: resolve(__dirname, "about.html"),
        services: resolve(__dirname, "services.html"),
        howItWorks: resolve(__dirname, "how-it-works.html"),
        gallery: resolve(__dirname, "gallery.html"),
        painting: resolve(__dirname, "painting.html"),
        plumbing: resolve(__dirname, "plumbing.html"),
        civilWork: resolve(__dirname, "civil-work.html"),
        furniture: resolve(__dirname, "furniture.html"),
        interiorWork: resolve(__dirname, "interior-work.html"),
        exteriorWork: resolve(__dirname, "exterior-work.html")
      }
    }
  }
});
