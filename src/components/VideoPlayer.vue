<template>
  <div class="m-auto container flex justify-center flex-wrap mt-10">
    <div class="card-inner">
      <video ref="video" loop muted playsinline :src="src" width="600" />
      <div class="content text-center mt-3">
        <button :class="buttonClass" @click="playPause()">
          {{ buttonLabel }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { computed } from "vue";
import { useGlobalEvent } from "@/use/useGlobalEvent.js";

defineProps({
  src: String,
});

const video = ref(null);
const isPaused = ref(true);

useGlobalEvent("keydown", (e) => {
  if (e.key === " ") {
    e.preventDefault();
    playPause();
  }
});

onMounted(() => {
  isPaused.value = video.value?.paused;
});

const buttonClass = computed(() => {
  return isPaused.value
    ? `relative h-10 px-6 font-semibold rounded-md text-white mr-4 hover:bg-blue-500 bg-blue-700`
    : `relative h-10 px-6 font-semibold rounded-md text-white mr-4 hover:bg-red-500 bg-red-700`;
});

const buttonLabel = computed(() => {
  return isPaused.value ? "Play" : "Pause";
});

const playPause = () => {
  if (isPaused.value) {
    video.value.play();
  } else {
    video.value.pause();
  }
  isPaused.value = !isPaused.value;
};
</script>
