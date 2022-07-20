<template>
  <div class="m-auto container flex justify-center flex-wrap mt-10">
    <div class="card-inner">
      <div class="content text-center">
        <video ref="video" loop muted playsinline :src="src" width="600" />
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
  console.log(e);
  if (e.key === " ") {
    e.preventDefault();
    playPause();
  }
});

onMounted(() => {
  console.log(video);
  video.value.play();
  isPaused.value = video.value?.paused;
});

const buttonClass = computed(() => {
  console.log("calc", isPaused.value);
  return "btn mr-4 " + isPaused.value ? "bg-blue-500" : "bg-red-500";
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
