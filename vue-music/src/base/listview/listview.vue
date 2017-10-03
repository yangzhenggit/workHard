<template>
    <scroll :data="data">
      <ul>
        <li v-for="group in data" ref="listGroup">
          <h2 class="list-group-title">{{group.title}}</h2>
        </li>
      </ul>
    </scroll>
</template>
<style>

</style>
<script>

</script>
