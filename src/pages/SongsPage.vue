<template>
  <div class="songs-page">
    <SearchInput v-model="searchedText" />
    <CardList :items="filteredSongs" @add::song="openAddSongModal" />
    <CustomButton v-if="filteredSongs.length" text="Load More" @click="page += 1" class="button-wrapper load-more" />
    <Modal ref="addSong" title="Add Song to playlist">
      <div class="add-song">
        <v-select v-model="selectedPlaylist" label="name" :options="this.getPlayListAsList" />
        <custom-button size="small" @click="updatePlaylist"> Add Song </custom-button>
      </div>
    </Modal>
  </div>
</template>
<script>
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex'

import SearchInput from '@/components/SearchInput'
import CardList from '@/components/CardList'
import CustomButton from '@/components/CustomButton'
import Modal from '@/components/Modal'

export default {
  name: 'SongsPage',
  components: {
    SearchInput,
    CardList,
    CustomButton,
    Modal
  },
  data () {
    return {
      searchedText: '',
      page: 1,
      selectedPlaylist: {},
      selectedSong: {}
    }
  },
  computed: {
    ...mapState('song', ['songs']),
    ...mapState('playlist', ['playlists']),
    ...mapGetters('playlist', ['getPlayListAsList']),
    search: {
      get () {
        return this.searchedText
      },
      set (newValue) {
        this.page = 1
        this.searchedText = newValue
      }
    },
    filteredSongs () {
      const pageLimit = 25
      const matchedSongs = this.searchedText ? this.songs.filter((song, index) => {
        if (song.title.includes(this.searchedText) || song.albumName.includes(this.searchedText)) {
          return song
        }
      }) : this.songs
      return matchedSongs.filter((song, index) => index < pageLimit * this.page)
    }
  },
  async created () {
    this.fetchSongs()
  },
  methods: {
    ...mapActions('song', ['fetchSongs']),
    ...mapActions('playlist', ['updatePlaylists']),
    ...mapMutations('playlist', ['addSongToPlaylist']),
    openAddSongModal (song) {
      this.selectedSong = song
      this.$refs.addSong.toggleModal()
    },
    updatePlaylist () {
      this.addSongToPlaylist({ name: this.selectedPlaylist.name, song: this.selectedSong })
      this.selectedSong = {}
      this.selectedPlaylist = {}
      this.$refs.addSong.toggleModal(false)
    }
  }
}
</script>

<style lang="scss" scoped>
.songs-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  .add-song {
    .button-wrapper {
      margin-top: $spacer/4;
    }
  }
}
</style>
