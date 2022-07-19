<template>
  <div id="app">
    <HelloWorld msg="Rick & Morty Characters" />
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
  },
};
</script>
