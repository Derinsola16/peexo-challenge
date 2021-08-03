<template>
  <div class="home d-flex pt-5">
    <div class="w-25 me-4 bottom-left d-hide" id="profile"><Profile /></div>
    <div class="wide w-auto" id="image">
      <div class="row">
        <div
          class="col-lg-4 mb-2"
          v-for="image in imageUrl.results || imageUrl"
          :key="image.id"
        >
          <img
            style="object-fit: cover"
            width="300"
            height="200"
            :src="image.urls.regular"
            class="w-100 shadow-1-strong rounded"
            alt="image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from "@/components/Profile.vue";
import { getPhoto, getRandomPhoto } from "../services/unsplash";

export default {
  name: "Home",
  components: {
    Profile,
  },
  data() {
    return {
      unsplashData: null,
    };
  },
  computed: {
    imageUrl() {
      if (this.unsplashData) return this.unsplashData;
      return null;
    },
  },
  methods: {
    Photo() {
      getPhoto().then((res) => {
        this.unsplashData = res;
      });
    },
    searchPhoto() {
      const param = {
        featured: true,
        query: this.$root.$refs.header.$data.query,
      };
      getRandomPhoto(param).then((res) => {
        this.unsplashData = res;
      });
    },
  },
  mounted() {
    this.Photo();
    this.$root.$refs.home = this;
  },
};
</script>
