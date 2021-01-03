import { fetchSongs, fetchAlbums } from '@/api'
import { mapSongsWithAlbums } from '@/utils/helper'

export default {
  state: () => ({
    songs: []
  }),
  actions: {
    async fetchSongs ({ state, commit }, payload) {
      try {
        const albumsResponse = await fetchAlbums()
        const songsResponse = await fetchSongs()
        commit('setSongs', mapSongsWithAlbums(songsResponse.data, albumsResponse.data))
      } catch (err) {
        console.error('Error in fetching songs', err)
      }
    }
  },
  mutations: {
    setSongs (state, songs) {
      state.songs = songs
    }
  }
}
