<template>
  <div class="dogs-table__wrapper">
    <CustomTable
      :data="dogsList"
      :total="total"
      v-model:per-page="limit"
      v-model:page="page"
    ></CustomTable>
  </div>
</template>

<script>
import CustomTable from "@/components/common/CustomTable";
import {
  GET_DOGS_LIST,
  UPDATE_DOGS_LIST_PAGINATION,
} from "@/constants/actions";
import { mapState, mapActions } from "vuex";
import { mapFields } from "@vasiliyrusin/vue-mapfields";

export default {
  name: "DogsTable",
  components: {
    CustomTable,
  },

  created() {
    this.GET_DOGS_LIST();
  },

  computed: {
    ...mapState("dogsTable", {
      dogsList: (state) => state.data,
      total: (state) => state.total,
    }),

    ...mapFields("dogsTable", {
      fields: ["limit", "page"],
      action: UPDATE_DOGS_LIST_PAGINATION,
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
