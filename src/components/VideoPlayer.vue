<script setup>
import { ref } from "vue";
defineProps({
  src: String,
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
