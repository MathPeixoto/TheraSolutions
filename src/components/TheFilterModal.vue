<template>
  <v-dialog v-model="dialog">
    <div class="modal-position">
      <header class="filter-header d-flex justify-space-between align-center">
        <div class="d-flex">
          <span id="filter-icon" class="d-block ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="#999999"
                d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"
              />
            </svg>
          </span>
          <span class="d-block ml-5 filter-font">FILTROS</span>
        </div>
        <button id="close-button" class="mr-6" @click="close">
          <span class="material-icons icon">
            close
          </span>
        </button>
      </header>
      <section class="filter-section container">
        <div class="quote">
          <p>
            Utilize os filtros abaixo para refinar os resultados da tabela,
            clique no botão APLICAR para salvar as alterações.
          </p>
          <div id="custom-divider"></div>
        </div>
        <div id="filters">
          <base-filter
            :description="'TODAS AS DATAS DE INCLUSÃO'"
            :firstIcon="'date_range'"
          />
          <v-divider />
          <base-filter
            :description="'TODAS AS DATAS DE ALTERAÇÃO'"
            :firstIcon="'date_range'"
          />
          <v-divider />
          <base-filter
            :description="'ATIVOS E INATIVOS'"
            :firstIcon="'hdr_strong'"
          />
          <v-divider />
        </div>
        <button id="apply">APLICAR</button>
      </section>
    </div>
  </v-dialog>
</template>

<script>
import BaseFilter from "../components/BaseFilter";

export default {
  name: "TheFilterModal",
  props: ["dialog"],
  components: {
    "base-filter": BaseFilter,
  },
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="scss" scoped>
#apply {
  margin-top: 40px;
  border: 1px solid #d83367;
  border-radius: 4px;
  width: 100%;
  height: 67px;

  color: #d83367;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 16px;
  opacity: 0.5;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
}

#close-button {
  width: 48px;
  height: 48px;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.1);
}

#custom-divider {
  border: 1px solid #e9e9e9;
  width: 24px;
  height: 2px;
}

.modal-position {
  position: fixed;
  top: 0;
  right: 0;
  min-height: 100%;
  max-width: 33%;
}

.filter-header {
  height: 96px;
  background-color: #fff;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.04);
}

.icon {
  color: #999999;
}

.filter-section {
  background-color: #f5f5f5;
  box-shadow: -4px 0x 24px 0 rgba(0, 0, 0, 0.24);
  height: 100vh;
}

.filter-font {
  color: #333333;
  font-family: Audiowide, cursive;
  font-weight: 400;
  font-size: 16px;
}

.quote {
  margin-top: 30px;
  padding: 8px;
}

p {
  color: #666666;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  text-align: start;
}
</style>
