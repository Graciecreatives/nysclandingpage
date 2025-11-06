import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "aos/dist/aos.css";
import AOS from "aos";
const app = createApp(App);

app.use(router);

app.mount("#app");

// ✅ Initialize AOS
AOS.init({
  duration: 1000, // Animation duration (ms)
  once: true, // Whether animation should happen only once
  offset: 100, // How far from the viewport the animation should start
});
