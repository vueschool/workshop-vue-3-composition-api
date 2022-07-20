import axios from "axios";
import { computed, ref } from "vue";
import { orderBy } from "lodash";

export function useFetchAllCharacters() {
  const loadingState = ref(null);
  const characters = ref([]);
  const orderKey = ref("id");

  const charactersOrdered = computed(() => {
    return orderBy(characters.value, orderKey.value);
  });

  function setOrderKey(key) {
    orderKey.value = key;
  }

  function fetchAllCharacters() {
    loadingState.value = "loading";
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setTimeout(() => {
        loadingState.value = "success";
        characters.value = response.data.results;
      }, 1000);
    });
  }
  fetchAllCharacters();

  return { charactersOrdered, setOrderKey, fetchAllCharacters };
}
