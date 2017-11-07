<template>
  <transition name="slide">
    <div class="music-list">
      <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import {getSingerDetail} from 'api/singer'
  import {ERR_OK} from 'api/config'
  import MusicList from 'components/music-list/music-list'
  import {createSong} from 'common/js/song'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        songs: []
      }
    },
    computed: {
      title() {
        return this.singer.name
      },
      bgImage() {
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])
    },
    mounted() {
      setTimeout(() => {
        this._getDetail()
      }, 20)
    },
    methods: {
      _getDetail() {
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSong(res.data.list)
          }
        })
      },
      _normalizeSong(list) {
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"
  .music-list
    position: fixed
    z-index: 100
    top: 0
    left: 0
    bottom: 0
    right: 0
    background: $color-background
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
