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
        <img
          @click="openProfile(item)"
          class="dogs-table-item__img"
          :src="item.url"
          :alt="item.url"
        />
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

import { SET_DOG_INFO } from "@/constants/mutations";
import { mapState, mapActions, mapMutations } from "vuex";
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

    // This shortcut initializes changes of these fields in store. Can be substituted by computed with getter and setter.
    ...mapFields("dogsTable", {
      fields: ["limit", "page"],
      action: UPDATE_DOGS_LIST_PAGINATION,
    }),
  },

  methods: {
    ...mapActions("dogsTable", {
      GET_DOGS_LIST,
    }),

    ...mapActions("dogsProfile", {
      SET_DOG_INFO,
    }),

    openProfile(item) {
      // const params = {
      //   breeds: item.breeds[0],
      //   img: item.img,
      // };
      this.SET_DOG_INFO(item);
      //Providing id of clicked image to Profile component
      this.$router.push({ name: "profile" });
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;

  .dogs-table {
    &-item__img {
      cursor: pointer;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
