<template>
  <!-- This is the Event Card Preview Component-->
  <div class="rounded overflow-hidden shadow-lg w-full pb-4">
    <img class="w-full" src="https://images.unsplash.com/photo-1472653431158-6364773b2a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Sunset in the mountains">
    <div class="px-6 py-4">
      <h1 class="text-xl font-bold">{{ event.name }}</h1>
      <time class="event--dates">{{ formattedDate }}</time>
      <p class="event--excerpt">{{ event.excerpt }}</p>
    </div>
    <div class="px-6 py-4">
    <g-link :to="'events/' + event.id" class="py-1 border-bottom">Weitere Infos</g-link>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "EventCard",
  props: {
    event: Object,
    color: String,
  },
  computed: {
    // The variety of dates is intended as an example of ways to use Moment to get different date formats.
    // Unused computed values should be removed.
    formattedStart: function() {
      return moment(this.event.startDate).format("MM/DD/YYYY h:mm A");
    },
    formattedEnd: function() {
      return moment(this.event.endDate).format("MM/DD/YYYY h:mm A");
    },
    formattedDate: function() {
      const start = moment(this.event.startDate).format("MM/DD/YYYY");
      const end = moment(this.event.endDate).format("MM/DD/YYYY");
      if (start == end) {
        return (
          moment(this.event.startDate).format("MM/DD/YYYY h:mm A") +
          " - " +
          moment(this.event.endDate).format("h:mm A")
        );
      } else {
        return (
          moment(this.event.startDate).format("MM/DD/YYYY h:mm A") +
          " - " +
          moment(this.event.endDate).format("MM/DD/YYYY h:mm A")
        );
      }
    },
  },
};
</script>

<style scoped>
.border-bottom {
  border-bottom: 2px solid black;
}
</style>
