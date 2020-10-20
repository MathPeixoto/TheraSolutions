<template>
  <div>
    <the-header id="header"/>
    <div class="d-flex justify-space-around mt-5">
      <the-table id="table"/>
    </div>
    <the-footer/>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";
import TheTable from "@/components/TheTable";
import TheFooter from "@/components/TheFooter";

export default {
  name: "Home",
  components: {
    "the-header": TheHeader,
    "the-table": TheTable,
    "the-footer": TheFooter,
  }
}
</script>
