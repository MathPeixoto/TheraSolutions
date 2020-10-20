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
      <th id="option-header"></th>
      <th id="actions-header">AÇÕES</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(row, index) in rows" class="tr-hover" :class="index === rowIndex ? 'tr-background' : ''">
      <td id="checkbox-body" class="d-flex justify-center">
        <v-checkbox
            :class="index === rowIndex ? 'd-none' : ''"
            v-model="row.box"
        ></v-checkbox>
      </td>
      <td id="user-body" :class="index === rowIndex ? 'opacity' : ''">{{ row.user }}</td>
      <td id="email-body" :class="index === rowIndex ? 'opacity' : ''">{{ row.email }}</td>
      <td id="date-one-body" :class="index === rowIndex ? 'opacity' : ''">{{ row.date_one }}</td>
      <td id="date-two-body" :class="index === rowIndex ? 'opacity' : ''">{{ row.date_two }}</td>
      <td id="rules-body" :class="index === rowIndex ? 'opacity' : ''">{{ row.rules }}</td>
      <td id="status-body" :class="index === rowIndex ? 'opacity' : ''">{{ row.status }}</td>
      <td id="options" class="d-flex justify-lg-end color-icon">
        <button @click="removeRow(row)">
          <i id="trash" v-show="index === rowIndex" class="material-icons mr-1">delete</i>
        </button>
        <button @click="editRow(row)">
          <i id="pen" v-show="index === rowIndex" class="material-icons ml-1">create</i>
        </button>
      </td>
      <td id="actions-body" :class="index === rowIndex ? 'opacity' : ''">
        <button @click="showOptions(index)">...</button>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {getUsers} from "@/api/client-service";

export default {
  name: "TheTable",
  data() {
    return {
      box: false,
      headers: ["BOX", "USUÁRIO", "EMAIL", "DATA DE INCLUSÃO", "DATA DE ALTERAÇÃO", "REGRAS", "STATUS", "AÇÕES"],
      rows: [],
      option: false,
      rowIndex: null,
      flag: false
    }
  },
  methods: {
    getAllUsers() {
      getUsers().then(response => {
        const users = [...response.data.users];
        users.map(user => {
          user.box = false;
        });
        this.rows.push(...users)
      });
    },
    showOptions(index) {
      if (this.flag) {
        this.rowIndex = null
        this.flag = false
      } else {
        this.rowIndex = index
        this.flag = true
      }
    },
    removeRow(row) {
      this.rows = this.rows.filter(value => value.id !== row.id)
    },
    editRow(row) {
      console.log(row)
    },
  },
  created() {
    this.getAllUsers()
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

.opacity {
  opacity: 0.12;
}

.tr-background {
  background-color: #FFFFFF !important;

  &:hover {
    background-color: white !important;
    transition: 0.4s;
    filter: brightness(100%) !important;

  }
}

.tr-hover:hover {
  transition: 0.4s;
  filter: brightness(80%);
}

.color-icon {
  color: #666666;
}

table {
  border-collapse: collapse;
  width: 96%;
}

thead > tr {
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
  height: 40px;
}

tbody tr:nth-child(even) {
  background-color: #E9E9E9;
}

tbody tr:nth-child(odd) {
  background-color: #F5F5F5;
}
</style>