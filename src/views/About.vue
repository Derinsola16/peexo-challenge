<template>
  <div class="about d-flex pt-5" id="about">
    <div class="w-25 me-4 bottom-left d-hide" id="profile"><Profile /></div>
    <div class="wide w-100 text-center" id="image">
      <Calendar
        class=""
        :attributes="attributes"
        @dayclick="onDayClick"
        is-expanded
      />
      <div class="mt-5">
        <div class="d-flex">
          <p class="text-warning me-3 mb-2 fw-bold">Booked</p>
          <span class="text-muted">Orange shaded dates are booked days</span>
        </div>
        <div class="d-flex">
          <p class="me-3">Available</p>
          <span class="text-muted">Unshaded dates are free days</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile.vue";
import Calendar from "v-calendar/lib/components/calendar.umd";
// import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  components: {
    Profile,
    Calendar,
    // DatePicker,
  },
  data() {
    return {
      days: [
        {
          date: new Date(2021, 7, 8),
          id: "2021-08-8",
        },
        {
          date: new Date(2021, 7, 9),
          id: "2021-08-9",
        },
        {
          date: new Date(2021, 7, 10),
          id: "2021-08-10",
        },
        {
          date: new Date(2021, 7, 11),
          id: "2021-08-11",
        },
        {
          date: new Date(2021, 7, 27),
          id: "2021-08-27",
        },
        {
          date: new Date(2021, 7, 28),
          id: "2021-08-28",
        },
        {
          date: new Date(2021, 7, 29),
          id: "2021-08-29",
        },
      ],
    };
  },
  computed: {
    dates() {
      return this.days.map((day) => day.date);
    },
    attributes() {
      return this.dates.map((date) => ({
        highlight: true,
        dates: date,
      }));
    },
  },
  methods: {
    onDayClick(day) {
      const idx = this.days.findIndex((d) => d.id === day.id);
      if (idx >= 0) {
        this.days.splice(idx, 1);
      } else {
        this.days.push({
          id: day.id,
          date: day.date,
        });
      }
    },
  },
};
</script>
