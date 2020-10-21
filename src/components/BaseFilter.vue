<template>
  <button
    type="button"
    @click="$emit('click')"
    class="d-flex justify-space-between mt-5 ml-2"
  >
    <div class="d-flex">
      <span class="material-icons d-block mr-3">
        {{ firstIcon }}
      </span>
      <span class="description d-block">{{ description }}</span>
    </div>
    <div>
      <span class="material-icons d-block">
        arrow_drop_down
      </span>
    </div>
  </button>
</template>

<script>
export default {
  name: "BaseFilter",
  props: ["description", "firstIcon"],
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  height: 46px;

  &:hover {
    transition: 0.4s;
    filter: brightness(80%);
  }
  .description {
    color: #d83367;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 16px;
  }

  span {
    color: #999999;
  }
}
</style>
