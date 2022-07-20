<template>
  <div>
    <div class="border-b-2 pb-4 border-gray-300 text-center">
      Order by
      <button class="btn bg-blue-500 mr-4" @click="setOrderKey('name')">
        Name
      </button>
      <button class="btn bg-orange-500" @click="setOrderKey('id')">Id</button>
    </div>
    <h1 class="text-2xl text-center mt-5">Locations</h1>
    <div class="m-auto container flex flex-wrap">
      <div
        v-for="location in locations"
        :key="location.id"
        class="xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 card"
      >
        <div class="card-inner">
          <div class="content text-center mt-5">
            <span class="header text-xl">{{ location.name }}</span>
            <div class="text-center text-gray-500 text-sm">
              <div class="">Type: {{ location.type }}</div>
              <div>{{ location.dimension }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 class="text-2xl text-center mt-5">Characters</h1>
    <div class="m-auto container flex flex-wrap mt-10">
      <div
        v-for="character in charactersOrdered"
        :key="character.id"
        class="xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2 card"
      >
        <div class="card-inner">
          <div class="image">
            <img
              :src="character.image"
              class="bg-gray-200"
              height="300"
              width="300"
            />
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

    <div v-if="loadingLocations === 'loading'" class="loading">
      <span class="text-gray-500">Loading locations...</span>
      <img src="/spinner.svg" alt="loading" />
    </div>
    <div v-if="loadingCharacters === 'loading'" class="loading">
      <span class="text-gray-500">Loading characters...</span>
      <img src="/spinner.svg" alt="loading" />
    </div>
  </div>
</template>

<script setup>
import { useFetchResource } from "@/composables/useFetchResource.js";
import { computed, ref } from "vue";
import { orderBy } from "lodash";
import { useGlobalEvent } from "@/composables/useGlobalEvent.js";

const { results: characters, loadingStatus: loadingCharacters } =
  useFetchResource("https://rickandmortyapi.com/api/character");

const charactersOrdered = computed(() => {
  return orderBy(characters.value, orderKey.value);
});
const orderKey = ref("id");
function setOrderKey(key) {
  orderKey.value = key;
}

const { results: locations, loading: loadingLocations } = useFetchResource(
  "https://rickandmortyapi.com/api/location"
);

useGlobalEvent("keydown", (e) => {
  console.log("pressed", e);
  if (e.key !== " ") {
    locations.value.splice(0, 1);
  }
});
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
