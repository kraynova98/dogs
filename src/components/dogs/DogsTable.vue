<template>
  <div class="dogs-table__wrapper">
    <customTable :data="dogsList"></customTable>
    <span>Test</span>
  </div>
</template>

<script>
import customTable from "@/components/common/CustomTable";
import { GET_DOGS_LIST } from "@/constants/actions";
import { mapState, mapActions } from "vuex";

export default {
  name: "DogsTable",
  components: {
    customTable,
  },

  created() {
    this.GET_DOGS_LIST();
  },

  computed: {
    ...mapState("dogsTable", {
      dogsList: (state) => state,
    }),
  },

  methods: {
    ...mapActions("dogsTable", {
      GET_DOGS_LIST,
    }),
  },
};
</script>

<style scoped>
.dogs-table__wrapper {
  display: flex;
  justify-content: center;
}
</style>
