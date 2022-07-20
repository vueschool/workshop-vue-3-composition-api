import axios from "axios";
import { computed, ref } from "vue";
import { orderBy } from "lodash";

/**
 *
 * @param {string} url
 * @returns
 */
export function useFetchResource(url) {
  const loadingLocations = ref(null);
  const locations = ref([]);
  const orderKey = ref("id");

  const locationsOrdered = computed(() => {
    return orderBy(locations.value, orderKey.value);
  });

  function setOrderKey(key) {
    orderKey.value = key;
  }

  function fetchLocations() {
    loadingLocations.value = "loading";
    axios.get(url).then((response) => {
      // setTimeout(() => {
      loadingLocations.value = "success";
      locations.value = response.data.results;
      // }, 1000);
    });
  }
  fetchLocations();

  setTimeout(() => {
    console.log(locationsOrdered.value);
  }, 1000);

  return { locationsOrdered, loadingLocations, setOrderKey, fetchLocations };
}
