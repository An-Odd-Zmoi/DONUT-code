import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/DONUT-code/",
  server: {
    proxy: {
      "/": {
        target: "https://ec2-3-24-21-254.ap-southeast-2.compute.amazonaws.com",
        secure: false,
      },
    },
  },
});
