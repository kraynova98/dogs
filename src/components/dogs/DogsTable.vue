<template>
  <div class="wrapper">
    <CustomTable
      class="dogs-table"
      :data="dogsList"
      :is-loading="isLoading"
      :total="total"
      v-model:per-page="limit"
      v-model:page="page"
    >
      <template #custom-table-item="{ item }">
        <img class="dogs-table-item__img" :src="item.url" :alt="item.url" />
      </template>
    </CustomTable>
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
      isLoading: (state) => state.isLoading,
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

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;

  .dogs-table {
    &-item__img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
