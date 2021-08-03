<template>
  <main class="d-flex">
    <div class="flex-grow-1">
      <Nav />
      <div class="px-4 mb-5">
        <router-view />
      </div>
    </div>
  </main>
</template>

<script>
import Nav from "@/components/Nav.vue";

export default {
  name: "Layout",
  components: {
    Nav,
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
