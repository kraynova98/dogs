<template>
  <div class="table">
    <template :key="index" v-for="(item, index) in data">
      <div class="table-item">
        <!--        <router-link-->
        <!--          :to="{-->
        <!--            name: 'detail',-->
        <!--            params: { id: item.id, info: dogInformation(item.id) },-->
        <!--          }"-->
        <!--        >-->
        <!--          <img :src="item.url" :alt="item.url" />-->
        <!--        </router-link>-->
      </div>
    </template>
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
  },

  // methods: {
  //   dogInformation(dogId) {
  //     return this.data.filter((dog) => dog.id === dogId);
  //   },
  // },
};
</script>

<style scoped>
.table {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 6px;
  grid-row-gap: 10px;
}

.table-item {
  width: 500px;
  height: 700px;
  overflow: hidden;
}

img {
  object-fit: cover;
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
