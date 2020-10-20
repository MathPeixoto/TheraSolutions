<template>
  <button id="base-button" type="button" @click="$emit('click')">
    <span>
      <i :class="iconClass" class="mr-1"></i>
      <span class="ml-1 font">{{ description }}</span>
    </span>
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: ["description", "iconClass"],
};
</script>

<style lang="scss" scoped>
button {
  width: 176px;
  height: 48px;
  background-color: #D83367;
  border-radius: 4px;

  i {
    color: #FFFFFF;
  }
  span {
    color: white;
  }
  &:hover {
    transition: 0.4s;
    filter: brightness(90%);
  }
  .font {
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 14px;
  }
}
</style>
