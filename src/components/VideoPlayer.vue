<script setup>
import { ref } from "vue";
import { useGlobalEvent } from "@/composables/useGlobalEvent";
defineProps({
  src: String,
});

const video = ref(null);
useGlobalEvent("keypress", (e) => {
  e.preventDefault();
  if (e.key !== " ") return;
  video.value.paused ? video.value.play() : video.value.pause();
});
</script>

<template>
  <div>
    <video :src="src" ref="video" />
    <div v-if="video">
      <button @click="video.play()">Play</button>
      <button @click="video.pause()">Pause</button>
    </div>
  </div>
</template>
