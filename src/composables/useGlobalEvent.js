import { onBeforeUnmount, onMounted } from "vue";

/**
 *
 * @param {Event} event
 * @param {Function} callback
 * @returns
 */
export function useGlobalEvent(event, callback) {
  function addListener() {
    window.addEventListener(event, callback);
  }
  function removeListener() {
    window.removeEventListener(event, callback);
  }

  onMounted(addListener);

  onBeforeUnmount(removeListener);
}
