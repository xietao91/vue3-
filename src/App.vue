<template>
  <div>
    <div v-for="route in routes" :key="route.key">
      <router-link :to="route.path">{{ route.path }}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup>
import { routes } from "@/router";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
