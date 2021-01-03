<template>
  <div v-if="isOpen" class="modal">
    <div class="modal__content" :style="{ width: size + '%', height: size + 'vh' }">
      <img src="@/assets/cancel.png" alt="close" class="close" @click="toggleModal(false)"/>
      <h1 v-if="title"> {{ title }}</h1>
      <slot>
        <div class="form">
          <input v-model="inputText" type="text" id="playlist" class="input">
          <CustomButton text="Create Playlist" @click="createPlaylist"/>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

import CustomButton from '@/components/CustomButton'

export default {
  name: 'Modal',
  components: {
    CustomButton
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: '40'
    }
  },
  data () {
    return {
      inputText: '',
      isOpen: false
    }
  },
  methods: {
    ...mapActions('playlist', ['updatePlaylists']),
    ...mapMutations('playlist', ['setErrorMessage']),
    createPlaylist () {
      if (!this.inputText) {
        this.setErrorMessage('Invalid Playlist Name')
        return
      }
      const playlist = {
        [this.inputText]: {
          createdAt: new Date(),
          songs: []
        }
      }
      this.updatePlaylists(playlist)
      this.toggleModal(false)
    },
    toggleModal (state = true) {
      this.isOpen = state
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 1;
  top: 0;
  left: 0;
  background: #17121291;
  display: flex;
  align-items: center;
  justify-content: center;
  &__content {
    background: #ffffff;
    padding: $spacer;
    border-radius: 5px;
    overflow: auto;
    position: relative;
    @include under-break($break--base) {
      width: 100%!important;
      height: 100%!important;
    }
    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 20px;
      cursor: pointer;
    }
    h1 {
      font-size: 32px;
      font-weight: 500;
      text-align: center;
      margin-bottom: $spacer/2;
    }
    .form {
      margin-top: $spacer/2;
      display: flex;
      flex-direction: column;
      align-items: center;
      .input {
        padding: $spacer/2 $spacer/3;
        min-width: 400px;
        font-size: 20px
      }
    }
  }
}
</style>
