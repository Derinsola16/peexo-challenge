<template>
  <div class="pricing d-flex pt-5" id="about">
    <div class="w-25 me-4 bottom-left d-hide" id="profile"><Profile /></div>
    <div class="wide w-100" id="image">
      <div class="">
        <table class="table">
          <thead class="thead">
            <tr>
              <td scope="col">Title</td>
              <td scope="col">Category</td>
              <td scope="col">Items</td>
              <td scope="col">Date Created</td>
              <td scope="col">Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Wedding Classic</td>
              <td>Wedding</td>
              <td>15</td>
              <td>5th Sep, 2020</td>
              <td>N350,000</td>
            </tr>
            <tr>
              <td scope="row">Beauty Campaign</td>
              <td>Beauty Campaign</td>
              <td>2</td>
              <td>5th Sep, 2020</td>
              <td>N350,000</td>
            </tr>
            <tr>
              <td scope="row">Prewedding Gold</td>
              <td>Wedding</td>
              <td>2</td>
              <td>5th Sep, 2020</td>
              <td>N45,000</td>
            </tr>
            <tr>
              <td scope="row">Culinary Photography</td>
              <td>Food</td>
              <td>18</td>
              <td>5th Sep, 2020</td>
              <td>N75,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";

export default {
  components: {
    Profile,
  },
};
</script>

<style scoped>
.thead {
  background-color: #fef5e6;
}

tbody,
thead {
  border-color: transparent !important;
}
</style>
