<script setup>
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <RouterView />
</template>

<!-- lang is set to scss because we are using sass -->
<style lang="scss">
* {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  max-width: 1100px;
}

main {
  background-color: aliceblue;
  display: flex;
  gap: 30px;
  margin: 0 auto;
  padding: 25px 0px 30px 300px;
}

.product-form {
  background-color: #fff;
  border: 0.5px solid rgb(224, 224, 224);
  border-radius: 5px;
  height: 770px;
  width: 800px;

  .top {
    padding: 15px 120px 15px 20px;
    border-bottom: 0.5px solid rgb(224, 224, 224);
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    background-color: rgb(218, 226, 232);
    padding: 10px;

    button {
      padding: 3px 12px;
      border-radius: 5px;
      outline: 0;
      border: 1px solid rgb(224, 224, 224);
      background-color: #fff;
      font-size: 14px;
    }

    .calculate {
      background-color: green;
      color: #fff;
    }
  }
}

.health-score {
  background-color: #fff;
  width: 400px;
  height: 250px;
  border: 0.5px solid rgb(224, 224, 224);
  border-radius: 5px;

  .top {
    padding: 15px 15px;
    border-bottom: 0.5px solid rgb(224, 224, 224);
  }
}

.nutritional-balance {
  display: flex;
  justify-content: space-between;
}

.addictives {
  display: flex;
  justify-content: space-between;
}

.bio {
  display: flex;
  justify-content: space-between;
}

.total {
  display: flex;
  justify-content: space-between;
  background-color: rgb(221, 230, 237);
  padding: 15px 15px 0px 15px;
}
</style>
