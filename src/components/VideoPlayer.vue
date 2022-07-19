<script setup>
import { ref } from "vue";
import { useGlobalEvent } from "@/composables/useGlobalEvent";
defineProps({
  src: String,
});

useGlobalEvent("keypress", (e) => {
  console.log(e);
  if (e.charCode !== 32) return;
  e.preventDefault();
  video.value.paused ? video.value.play() : video.value.pause();
});

const video = ref(null);
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
