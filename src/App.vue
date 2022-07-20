<template>
  <div id="app">
    <button @click="show = !show">Toggle</button>
    <VideoPlayer src="/dog-on-the-beach.mp4" />
    <HelloWorld v-if="show" msg="Rick & Morty Characters" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import HelloWorld from "@/components/HelloWorld.vue";
import VideoPlayer from "./components/VideoPlayer.vue";

const show = ref(true);
</script>
