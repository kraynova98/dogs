<template>
  <div v-loading="isLoading" class="table">
    <template :key="index" v-for="(item, index) in data">
      <div class="table-item">
        <slot name="custom-table-item" :item="item">
          <img class="table-item__img" :src="item.url" :alt="item.url" />
        </slot>
      </div>
    </template>

    <el-pagination
      v-model:currentPage="_page"
      layout="prev, pager, next"
      :page-size="perPage"
      :page-count="total"
    />
  </div>
</template>

<script>
export default {
  name: "CustomTable",
  props: {
    data: {
      type: Array,
      default: () => [],
    },

    perPage: {
      type: Number,
      default: 12,
    },

    total: {
      type: Number,
      default: null,
    },

    page: {
      type: Number,
      default: 1,
    },

    isLoading: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    _page: {
      get() {
        return this.page;
      },

      set(value) {
        this.$emit("update:page", value);
      },
    },
  },
};
</script>

<style scoped lang="scss">
.table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 6px;
  grid-row-gap: 6px;

  .el-loading-parent--relative {
    height: 100vh;
  }

  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 600px;
    overflow: hidden;

    &__img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
  }

  .el-pagination {
    grid-column: 2;
  }
}

@media screen and (max-width: 1024px) {
  .table {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 768px) {
  .table {
    grid-template-columns: 1fr;
  }
}
</style>
