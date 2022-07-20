import axios from "axios";
import { ref } from "vue";

/**
 *
 * @param {string} url
 * @returns
 */
export function useFetchResource(url) {
  const loadingStatus = ref(null);
  const results = ref([]);

  function fetch() {
    loadingStatus.value = "loading";
    axios.get(url).then((response) => {
      // setTimeout(() => {
      loadingStatus.value = "success";
      results.value = response.data.results;
      // }, 1000);
    });
  }
  fetch();

  setTimeout(() => {
    console.log(results.value);
  }, 1000);

  return { results, loadingStatus, fetch };
}
