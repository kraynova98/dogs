<template>
  <div class="profile">
    <div class="profile-image">
      <img class="profile-image__img" :src="dog.url" :alt="dog.url" />
    </div>
  </div>
  <!--  <span>{{ dogId }}</span>-->
</template>

<script>
export default {
  name: "Profile",

  created() {
    //Getting current dog
    this.dog = this.$store.state.dogsProfile.data;
  },

  data() {
    return {
      dog: null,
    };
  },
};
</script>

<style scoped lang="scss">
.profile {
  height: 100vh;

  &-image {
    width: 50%;
    height: 70%;
    overflow: hidden;

    &__img {
      object-fit: contain;
      height: 100%;
      width: 100%;
    }
  }
}
</style>
