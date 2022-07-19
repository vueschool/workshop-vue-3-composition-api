import { ref } from "vue";
import axios from "axios";
export function useFetchAllCharacters() {
  const characters = ref([]);
  const loadingState = ref(null);
  function fetchAllCharacters() {
    loadingState.value = "loading";
    axios.get("https://rickandmortyapi.com/api/character").then((response) => {
      setTimeout(() => {
        loadingState.value = "success";
        characters.value = response.data.results;
      }, 1000);
    });
  }
  return { characters, loadingState, fetchAllCharacters };
}
