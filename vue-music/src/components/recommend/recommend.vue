<template>
  <div>
      推荐
  </div>
</template>
<script>
  import {getRecommened} from 'api/recommend.js'
  export default{
    data() {
      return {

      }
    },
    created() {
      this._getRecommend()
    },
    methods: {
      _getRecommend() {
        getRecommened()
      }
    }
  }
</script>
<style scoped rel="stylesheet/stylus">

</style>
