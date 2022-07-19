<template>
  <div>
    <div class="border-b-2 pb-4 border-gray-300 text-center">
      Order by
      <button class="btn bg-blue-500 mr-4" @click="setOrderKey('name')">
        Name
      </button>
      <button class="btn bg-orange-500" @click="setOrderKey('id')">Id</button>
    </div>
    <div class="m-auto container flex flex-wrap mt-10">
      <div
        v-for="character in charactersOrdered"
        :key="character.id"
        class="xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 card"
      >
        <div class="card-inner">
          <div class="image">
            <img :src="character.image" />
          </div>
          <div class="content text-center mt-5">
            <span class="header text-xl">{{ character.name }}</span>
            <div class="text-center text-gray-500 text-sm">
              <div class="">Status: {{ character.status }}</div>
              <div>{{ character.species }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="loadingState === 'loading'" class="loading">
      <span class="text-gray-500">Loading characters...</span>
      <img src="/spinner.svg" alt="loading" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
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
</script>

<script>
import axios from "axios";
import orderBy from "lodash/orderby";
export default {
  data() {
    return {
      orderKey: "id",
    };
  },
  computed: {
    charactersOrdered() {
      return orderBy(this.characters, this.orderKey);
    },
  },
  methods: {
    setOrderKey(key) {
      this.orderKey = key;
    },
  },
  created() {
    this.fetchAllCharacters();
  },
};
</script>

<style scoped>
.btn {
  @apply px-6 py-1 text-white rounded;
}
.card-inner {
  @apply p-4 shadow-md rounded m-2;
}
.card-inner img {
  @apply rounded;
  max-width: auto;
  display: block;
}
.loading {
  @apply fixed top-0 left-0 right-0 bottom-0 bg-white flex justify-center items-center;
}
</style>
