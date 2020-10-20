<template>
  <table>
    <thead>
    <tr>
      <th id="checkbox-header"></th>
      <th id="user-header">USUÁRIO</th>
      <th id="email-header" class="d-flex">EMAIL</th>
      <th id="date-one-header">DATA DE INCLUSÃO</th>
      <th id="date-two-header">DATA DE ALTERAÇÃO</th>
      <th id="rules-header">REGRAS</th>
      <th id="status-header" class="d-flex">STATUS</th>
      <th id="actions-header">AÇÕES</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="row in rows">
      <td id="checkbox-body" class="d-flex justify-center">
        <v-checkbox
            v-model="row.box"
        ></v-checkbox>
      </td>
      <td id="user-body">{{ row.user }}</td>
      <td id="email-body">{{ row.email }}</td>
      <td id="date-one-body">{{ row.date_one }}</td>
      <td id="date-two-body">{{ row.date_two }}</td>
      <td id="rules-body">{{ row.regras }}</td>
      <td id="status-body">{{ row.status }}</td>
      <td id="actions-body">{{ row.acoes }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "TheTable",
  data() {
    return {
      headers: ["BOX", "USUÁRIO", "EMAIL", "DATA DE INCLUSÃO", "DATA DE ALTERAÇÃO", "REGRAS", "STATUS", "AÇÕES"],
      rows: [
        {
          box: true,
          user: "ANPINA",
          email: "antonio.pina@tvglobo.com.br",
          date_one: "28/05/2019",
          date_two: "30/05/2019",
          regras: 0o1,
          status: "ATIVO",
          acoes: "..."
        },
        {
          box: false,
          user: "ANPINA",
          email: "antonio.pina@tvglobo.com.br",
          date_one: "28/05/2019",
          date_two: "30/05/2019",
          regras: 0o1,
          status: "ATIVO",
          acoes: "..."
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#user-body, #date-one-body, #date-two-body, #rules-body, #actions-body {
  text-align: center;
}

#status-body {
  color: #31BA1F;
}

table {
  border-collapse: collapse;
  width: 96%;
}

thead>tr {
  background-color: #FFFFFF;
}

thead th {
  width: 170px;
  height: 46px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 12px;
}

tbody td {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 14px;
  height: 49px;
}

tbody tr:nth-child(even) {
  background-color: #E9E9E9;
}

tbody tr:nth-child(odd) {
  background-color: #F5F5F5;
}
</style>