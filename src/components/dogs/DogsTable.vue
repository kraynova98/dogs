<template>
  <div class="dogs-table__wrapper">
    <customTable :data="dogsList"></customTable>
    <span>Test</span>
  </div>
</template>

<script>
import customTable from "@/components/common/CustomTable";
import { DogsService } from "@/services/dogs/dogsTable";

export default {
  name: "DogsTable",
  components: {
    customTable,
  },
  data() {
    return {
      dogsList: null,
    };
  },

  mounted() {
    console.log(DogsService.getDogsList());
  },
};
</script>

<style scoped>
.dogs-table__wrapper {
  display: flex;
  justify-content: center;
}
</style>
