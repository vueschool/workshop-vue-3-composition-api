<template>
  <div id="app">
    <VideoPlayer src="/dog-on-the-beach.mp4" />
    <HelloWorld msg="Rick & Morty Characters" />
  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import VideoPlayer from "./components/VideoPlayer.vue";
</script>
