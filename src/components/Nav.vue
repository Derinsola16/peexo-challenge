<template>
  <main class="">
    <div class="d-flex justify-content-between bg-white shadow px-4 py-2">
      <h3 class="text-warning mt-1">Peexo</h3>
      <div class="d-flex justify-content-evenly mt-2">
        <p class="me-5">Business Manager</p>
        <p class="me-5">MarketPlace</p>
        <p class="me-5">XooCam</p>
      </div>
      <ul class="navbar-nav mb-2 mb-lg-0">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle text-muted"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <span class="text-warning">Join peexo</span>
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="top-container">
      <img src="../assets/spag.jpeg" alt="" class="contain px-3 py-2" />
    </div>
    <div
      class="d-flex justify-content-between pad-x bg-color header"
      id="myHeader"
    >
      <div class="d-flex">
        <img
          src="../assets/tim.png"
          alt=""
          class="rounded-circle me-2"
          width="60"
          height="60"
        />
        <p class="text-warning mt-4 point" @click="show">Show Card</p>
      </div>
      <div class="d-flex mt-2 mb-2">
        <router-link
          to="/"
          class="text-decoration-none text-dark"
          :class="{
            active: currentRoute == 'Home',
          }"
        >
          <p class="m-2">Portfolio</p>
        </router-link>
        <router-link
          to="/availability"
          class="text-decoration-none text-dark"
          :class="{
            active: currentRoute == 'About',
          }"
        >
          <p class="m-2">Availability</p>
        </router-link>
        <router-link
          to="/pricing"
          class="text-decoration-none text-dark"
          :class="{
            active: currentRoute == 'Pricing',
          }"
        >
          <p class="m-2">Pricing Package</p>
        </router-link>
      </div>
      <div></div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Nav",
  methods: {
    show() {
      let page = document.getElementById("profile");
      // let calendar = document.getElementById("about");
      page.classList.add("d-show");
      page.classList.remove("d-hide");
      // calendar.classList.add("d-flex");
    },
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  mounted() {
    window.onscroll = function () {
      myFunction();
    };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.shadow {
  box-shadow: 0px 1px 3px #00000029 !important;
  opacity: 1;
  z-index: 1000;
  overflow: visible;
  position: fixed;
  top: 0;
  width: 100%;
}

.contain {
  width: 100%;
  object-fit: cover;
  height: 265px;
  border-radius: 30px;
  margin-top: 70px;
}
/* .top-container {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
} */

/* .header {
  background: #555;
} */

.bg-color {
  background-color: #fffdf7;
}

.content {
  padding: 16px;
}

.sticky {
  padding-top: 65px;
  position: fixed;
  top: 0;
  width: 100%;
}

.sticky + .content {
  padding-top: 102px;
}
</style>
