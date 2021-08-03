<template>
  <main class="d-flex">
    <!-- <Profile /> -->
    <div class="flex-grow-1">
      <Nav />
      <div class="px-4 mb-5">
        <!-- <div class="me-2 bottom-left w-25 ms-5" id="profile"> -->
          <!-- <Profile /> -->
        <!-- </div> -->
        <!-- <div class="wide" id="image"> -->
          <router-view />
        <!-- </div> -->
      </div>
    </div>
  </main>
</template>

<script>
import Nav from "@/components/Nav.vue";
// import Profile from "@/components/Profile.vue";

export default {
  name: "Layout",
  components: {
    Nav,
    // Profile,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style scoped>
.bg {
}
</style>
