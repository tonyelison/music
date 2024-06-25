import { reactive } from "vue";
import { useWindowScroll } from "@vueuse/core";

const scrollY = useWindowScroll().y;
const threshold = 100;

export const scroll = reactive({
  didScroll: true,
  update() {
    this.didScroll = scrollY.value > threshold;
  },
  addEventListener() {
    this.update();
    window.addEventListener("scroll", () => this.update());
  },
  removeEventListener() {
    window.removeEventListener("scroll", () => this.update());
  },
});
