<template>
  <div>
    <the-header id="header" />
    <div class="d-flex justify-space-around">
      <the-table id="table" />
    </div>
    <the-pagination class="mt-6" />
    <the-footer />
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheTable from "../components/TheTable";
import TheFooter from "../components/TheFooter";
import ThePagination from "../components/ThePagination.vue";

export default {
  name: "Home",
  components: {
    "the-header": TheHeader,
    "the-table": TheTable,
    "the-footer": TheFooter,
    "the-pagination": ThePagination,
  },
};
</script>
