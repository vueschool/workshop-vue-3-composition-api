<template>
  <div>
    <h1 class="p-8 text-4xl text-center">
      {{ msg }}
    </h1>
    <CharacterCards />
  </div>
</template>

<script>
import CharacterCards from "@/components/CharacterCards.vue";
export default {
  name: "HelloWorld",
  components: {
    CharacterCards,
  },
  props: {
    msg: String,
  },
  data() {
    return {
      ids: [99],
    };
  },
};
</script>
