<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <header>
    <nav class="container">
      <div class="logo">
        <img src="../assets/Vue_Logo_Black.png" alt="" />
        <h1>NutriTracks</h1>
      </div>

      <ul class="nav-links">
        <RouterLink to="/">Product</RouterLink>
        <RouterLink to="/cosmetic">Cosmetics</RouterLink>
        <button>Log in</button>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  border-bottom: 0.5px solid rgb(224, 224, 224);
  nav {
    display: flex;
    align-items: center;
    padding: 12px 12px 12px 0px;

    .logo {
      display: flex;
      align-items: center;
      gap: 6px;
      img {
        max-width: 20px;
      }

      h1 {
        font-size: 18px;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
          sans-serif;
      }
    }

    .nav-links {
      display: flex;
      align-items: center;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;
      font-size: 14px;
      color: rgb(77, 74, 74);

      a {
        text-decoration: none;
        color: inherit;
      }

      button {
        padding: 3px 10px;
        border-radius: 5px;
        outline: 0;
        border: 1px solid rgb(224, 224, 224);
        background-color: #fff;
        font-size: 13px;
        color: rgb(77, 70, 70);
      }

      button:hover {
        background-color: #b9b3b3;
      }
    }
  }
}
</style>
