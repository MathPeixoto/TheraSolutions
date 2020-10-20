<template>
  <div>
    <the-header />
    <div class="d-flex justify-space-around mt-5">
      <the-table />
    </div>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheTable from "@/components/TheTable";

export default {
  name: "Home",
  components: {
    "the-header": TheHeader,
    "the-table": TheTable,
  }
}
</script>
