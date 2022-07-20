import { ref } from "vue";
import { onBeforeUnmount, onMounted } from "vue";

/**
 *
 * @param {Event} event
 * @param {Function} callback
 * @returns
 */
export function useGlobalEvent(event, callback) {
  const listener = ref(null);
  function addListener() {
    listener.value = window.addEventListener(event, callback);
  }
  function removeListener() {
    window.removeEventListener(event, listener.value);
  }

  onMounted(addListener);

  onBeforeUnmount(removeListener);
}
