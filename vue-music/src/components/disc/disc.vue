<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>
<script>
  import MusicList from 'components/music-list/music-list'
  import {getSongList} from 'api/recommend'
  import {mapGetters} from 'vuex'
  import {createSong} from 'common/js/song'
  import {ERR_OK} from 'api/config'
  export default {
    computed: {
      title() {
        return this.disc.dissname
      },
      bgImage() {
        return this.disc.imgurl
      },
      ...mapGetters([
        'disc'
      ])
    },
    components: {
      MusicList
    },
    created() {
      this._getSongList()
    },
    data() {
      return {
        songs: []
      }
    },
    methods: {
      _getSongList() {
        if (!this.disc.dissid) {
          return this.$router.push('/recommend')
        }
        getSongList(this.disc.dissid).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSong(res.cdlist[0].songList)
          }
        })
      },
      _normalizeSong(list) {
        let ret = []
        list.forEach((musicList) => {
          if (musicList.songid && musicList.albumid) {
            ret.push(createSong(musicList))
          }
        })
        return ret
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
