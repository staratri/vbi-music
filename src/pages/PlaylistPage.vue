<template>
<div class="playlist">
  <CustomButton text="addSongs" @click="$refs.addSong.toggleModal()" />
  <CardList :items="getSongs">
    <template v-slot:action>
      <button class="button-wrapper">
        <img src="@/assets/play.png" alt="">
      </button>
      <button @click="$emit('add::song', item.id)" class="button-wrapper">
        <img src="@/assets/delete.png" alt="">
      </button>
    </template>
  </CardList>
  <Modal size="80" ref="addSong" title="Add Songs to playlist">
    <div class="add-song">
      <v-select :multiple="true" :close-on-select="false" v-model="selectedSongs" label="title" :options="songs" />
      <custom-button size="small" text="Add Songs" @click="addSongs" />
    </div>
  </Modal>
</div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

import CardList from '@/components/CardList'
import CustomButton from '@/components/CustomButton'
import Modal from '@/components/Modal'

export default {
  name: 'PlaylistPage',
  components: {
    CardList,
    CustomButton,
    Modal
  },
  data () {
    return {
      selectedSongs: []
    }
  },
  computed: {
    ...mapState('song', ['songs']),
    ...mapState('playlist', ['playlists']),
    getPlaylist () {
      return this.playlists[this.$route.params.id]
    },
    isPlaylistPage () {
      return this.$route.name === 'PlaylistPage'
    },
    getSongs () {
      return this.songs.filter(song => {
        return this.getPlaylist.songs.some(el => el === song.id)
      })
    }
  },
  created () {
    this.fetchSongs()
  },
  methods: {
    ...mapActions('song', ['fetchSongs']),
    ...mapMutations('playlist', ['addMultipleSongsToPlaylist']),
    addSongs () {
      this.addMultipleSongsToPlaylist({ name: this.$route.params.id, songs: this.selectedSongs.map(el => el.id) })
      this.selectedSongs = []
      this.$refs.addSong.toggleModal(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.playlist {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
