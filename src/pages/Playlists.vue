
<script>
import { mapState } from 'vuex'

import Modal from '@/components/Modal'
import CardList from '@/components/CardList'
import CustomButton from '../components/CustomButton.vue'

export default {
  name: 'Playlists',
  components: {
    Modal,
    CardList,
    CustomButton
  },
  computed: {
    ...mapState('playlist', ['playlists'])
  }
}
</script>

<template>
  <div class="playlists">
    <CustomButton @click="$refs.addPlaylist.toggleModal()" text="Create Playlist" class="button-wrapper" />
    <CardList :items="playlists">
      <template v-slot:info="{ item }" >
        <h1> {{ item.index }} </h1>
      </template>
      <template v-slot:action="{ item }">
        <custom-button @click="$router.push({ name: 'PlaylistPage', params: { id: item.index } })" text="View list" />
      </template>
    </CardList>
    <Modal title="Create Playlist" ref="addPlaylist" />
  </div>
</template>

<style lang="scss" scoped>
.playlists {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: $spacer/2;
}
</style>
