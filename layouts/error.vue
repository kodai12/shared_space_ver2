<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">404 NOT FOUND</h1>
    <p>{{ error.message }}</p>
    <nuxt-link to="/">HOME</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style>
</style>
