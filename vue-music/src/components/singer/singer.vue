<template>
  <div class="singer" ref="singer">
    <list-view :data="singers" ref="list"></list-view>
  </div>
</template>
<script>
  import Listview from 'base/listview/listview'
  import {getSingerList} from 'api/singer.js'
  import {ERR_OK} from 'api/config'
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
            getSingerList().then( (res)=> {
                if (resizeBy.code === ERR_OK) {
                    this.singers = res.data.list
                }
            })
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
