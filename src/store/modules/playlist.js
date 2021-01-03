const toast = {
  error: 'failure',
  success: 'success'
}

export default {
  state: () => ({
    toast: {},
    playlists: {}
  }),
  getters: {
    getPlayListAsList: state => {
      const list = []
      Object.keys(state.playlists).forEach(el => {
        const obj = { ...state.playlists[el] }
        obj.name = el
        list.push(obj)
      })
      return list
    }
  },
  actions: {
    updatePlaylists ({ state, commit }, payload) {
      if (state.playlists[Object.keys(payload)[0]]) {
        commit('setToast', { status: toast.error, message: 'Playlist with the same name already exists' })
      } else {
        commit('setPlaylists', payload)
        commit('setToast', { status: toast.success, message: 'Playlist added' })
      }
    }
  },
  mutations: {
    setToast (state, message) {
      state.toast = {}
      state.toast = message
    },
    setPlaylists (state, playlist) {
      const playlists = { ...state.playlists, ...playlist }
      state.playlists = playlists
      localStorage.setItem('playlists', JSON.stringify(playlists))
    },
    addSongToPlaylist (state, payload) {
      const playlistSongs = [...state.playlists[payload.name].songs]
      playlistSongs.push(payload.song)
      state.playlists[payload.name].songs = playlistSongs
      localStorage.setItem('playlists', JSON.stringify(state.playlists))
      state.toast = { status: toast.success, message: 'Song added to playlist' }
    },
    addMultipleSongsToPlaylist (state, payload) {
      const playlistSongs = [...state.playlists[payload.name].songs, ...payload.songs]
      state.playlists[payload.name].songs = playlistSongs
      localStorage.setItem('playlists', JSON.stringify(state.playlists))
      state.toast = { status: toast.success, message: 'Songs added to playlist' }
    },
    initializeStore (state) {
      if (localStorage.getItem('playlists')) {
        state.playlists = JSON.parse(localStorage.getItem('playlists'))
      } else {
        state.playlists = []
      }
    }
  }
}
