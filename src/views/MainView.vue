<template>
  <div class="home">
    <Main></Main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "@/components/Main.vue"; // @ is an alias to /src

export default defineComponent({
  name: "MainView",
  components: {
    Main,
  },
});
</script>
