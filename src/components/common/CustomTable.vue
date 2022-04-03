<template>
  <div class="table">
    <template :key="index" v-for="(item, index) in data">
      <div class="table-item">
        <img :src="item.url" :alt="item.url" />
      </div>
    </template>
    <el-pagination
      :currentPage="page"
      layout="prev, pager, next"
      :page-size="perPage"
      :total="total"
      @current-change="changeCurrentPage"
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
  },

  methods: {
    changeCurrentPage(val) {
      this.$emit("update:page", val);
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

  &-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 600px;
    overflow: hidden;

    img {
      object-fit: cover;
      height: 100%;
      width: 100%;
    }
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
