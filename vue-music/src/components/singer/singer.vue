<template>
  <div class="singer" ref="singer">
    <list-view :data="singers" ref="list"></list-view>
  </div>
</template>
<script>
  export default{
      data() {
          return {
              singers: []
          }
      },
      created() {
          this._getSingerList();
      },
      methods: {
          _getSingerList() {

          }
      }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
