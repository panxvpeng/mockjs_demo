<template>
  <div>
    <h1>home</h1>

    <table border="1">
      <tr>
        <th>name</th>
        <th>age</th>
      </tr>
      <tr v-for="(item ) in userData" :key="item.name">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
      </tr>
    </table>

    <input type="text" v-model="name" placeholder="name" />
    <input type="text" v-model="age" placeholder="age" />
    <button @click="add">add</button>
    <button @click="getData">get</button>
    <button @click="del">del</button>
    <button @click="editData">edit</button>
    <button @click="searchData">search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: "",
      name: "",
      userData: [],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    del() {
      this.$http.user.del({ name: this.name }).then((res) => {
        console.log(res);
      });
    },
    add() {
      this.$http.user.add({ name: this.name, age: this.age }).then((res) => {
        console.log(res);
      });
    },
    getData() {
      this.$http.user.get().then((res) => {
        console.log(res);
        this.userData = res.data.data;
        console.log(this.userData);
      });
    },
    editData() {
      this.$http.user.edit({ name: this.name, age: this.age }).then((res) => {
        console.log(res);
      });
    },
    searchData() {
      this.$http.user.search({ name: this.name}).then((res) => {
          this.userData = res.data.data
        console.log(res);
      });
    },
  },
};
</script>

<style>
</style>