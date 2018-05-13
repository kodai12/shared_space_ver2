<template>
  <ul class="user_name-list">
    <li class="item"
      v-for="name in names">
      <a href="#">
        <span>{{ name }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      names: [
        'sample name1',
        'sample name2'
      ]
    };
  }
};
</script>

<style>
</style>
