import { onMounted, onUnmounted } from "vue";
export function useGlobalEvent(event, callback) {
  onMounted(() => {
    document.body.addEventListener(event, callback);
  });
  onUnmounted(() => {
    document.body.removeEventListener(event, callback);
  });
}
