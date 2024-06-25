import { reactive } from "vue";

export const navFlyout = reactive({
  isOpen: false,
  toggle(state: boolean) {
    this.isOpen = state === undefined ? !this.isOpen : state;
  },
});
