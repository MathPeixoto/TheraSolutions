<template>
  <footer class="d-flex align-center justify-space-between">
    <div class="d-flex align-center">
      <v-radio-group class="ml-3 default-size" v-model="radioSelected">
        <v-radio
            color="#FF8700"
            value="selected"
        >
          <template v-slot:label>
            <span id="live">NO AR</span>
          </template>
        </v-radio>
      </v-radio-group>
      <div class="d-flex align-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path style="fill: #666666"
                d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z"/>
        </svg>
        <span class="ml-2 appointment default-size">ENCONTRO - 10:00</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path style="fill: #666666"
                d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"/>
        </svg>
        <span class="ml-2 update">Última atualização em 10:28</span>
      </div>
    </div>
    <div class="d-flex align-center">
      <div class="d-flex align-center">
        <span
            class="date default-size">Quinta, <strong>30</strong> de <strong>Maio</strong> de <strong>2019</strong></span>
        <span class="ml-2 mr-2 default-size time">// 10:30:42</span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
  data() {
    return {
      radioSelected: "selected",
    }
  }
}
</script>

<style lang="scss" scoped>
footer {
  background-color: #333333;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}

.default-size {
  width: 175px;
}

.appointment {
  color: #E9E9E9;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 14px;
}

.update {
  color: #E9E9E9;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: italic;
  font-size: 14px;
}

.date {
  color: #E9E9E9;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  font-style: italic;
  font-size: 14px;
}

.time {
  color: #FF8700;
  font-family: Audiowide, cursive;
  font-weight: 400;
  font-size: 24px;
}

#live {
  color: #FF8700;
  font-family: Audiowide, cursive;
  font-weight: 400;
  font-size: 12px;
}
</style>