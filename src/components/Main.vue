<template>
  <DogsTable></DogsTable>
</template>

<script>
import DogsTable from "@/components/dogs/DogsTable";

export default {
  name: "HelloWorld",
  components: {
    DogsTable,
  },
  props: {
    msg: String,
  },
};
</script>

<style scoped lang="scss"></style>
