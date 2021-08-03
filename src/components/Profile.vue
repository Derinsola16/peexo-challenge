<template>
  <main>
    <div
      class="
        bg-white
        px-3
        rounded
        py-3
        border border-warning
        text-center
        size
        container
      "
    >
      <p class="text-warning text-end point" @click="hide">Hide</p>
      <div class="">
        <img src="../assets/tim.png" alt="" />
        <h2>Ekemini Mark</h2>
        <p class="">
          I’m a wedding and portrait photographer based in Lagos, Nigeria. I’ve
          been shooting weddings since I was in high school (before I ....
        </p>
      </div>
      <div class="d-flex mb-3">
        <div class="me-3">
          <p class="bold mb-0">21.1k</p>
          <small>Total View</small>
        </div>
        <div class="me-3">
          <p class="bold mb-0">21.1k</p>
          <small>Total View</small>
        </div>
        <div>
          <p class="bold mb-0">Sony 92J</p>
          <small>Camera Lens</small>
        </div>
      </div>
      <div>
        <div class="d-flex">
          <p class="me-2">Category</p>
          <span class="fw-bold me-2">Food</span>
          <span class="fw-bold me-2">Portrait</span>
          <span class="fw-bold me-2">Wedding</span>
          <span class="fw-bold me-2">Model</span>
        </div>
        <div class="d-flex">
          <p class="me-2">Location</p>
          <span class="fw-bold">Lagos, Nigeria</span>
        </div>
      </div>
      <div class="d-flex flex-column align-items-center mb-4">
        <div class="d-flex">
          <i class="fas fa-share-alt text-warning mt-1 me-2"></i>
          <p>www.peexoo.ai/anijohnson</p>
        </div>
        <div class="d-flex">
          <div class="mt-1 me-4 rounded-circle">
            <i class="fab fa-twitter"></i>
          </div>
          <div class="mt-1 me-4 rounded-circle">
            <i class="fab fa-instagram"></i>
          </div>
          <div class="mt-1 me-4 rounded-circle">
            <i class="fas fa-envelope"></i>
          </div>
          <p class="bg-warning rounded-pill text-white px-3 py-1">Book Now</p>
        </div>
      </div>
      <p>Built <i class="fas fa-heart text-warning"></i> on peexo</p>
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    hide() {
      let page = document.getElementById("profile");
      // let gallery = document.getElementById("image");
      page.classList.add("d-hide");
      page.classList.remove("d-show");
      // gallery.classList.add("w-auto");
    },
  },
};
</script>
