<template>
  <div class="d-flex justify-center">
    <button id="first">Primeiro</button>
    <button id="prev">Anterior</button>
    <button id="page">1</button>
    <button id="next" disabled>Próximo</button>
    <button id="last" disabled>Último</button>
  </div>
</template>

<script>
export default {
  name: "ThePagination",
};
</script>

<style lang="scss" scoped>
#page {
  background-color: #d83367;
  width: 48px;
  color: #fff;
}

button {
  height: 48px;
  width: 85px;
  border-radius: 4px;
  background-color: #ffffff;

  color: #666666;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;

  &:disabled {
    background-color: rgba(255, 255, 255, 0.4);
  }
}

button + button {
  margin-left: 8px;
}
</style>
