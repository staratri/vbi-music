<script>
import Tabs from '@/components/Tabs'
import Toast from '@/components/Toast'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'VIB',
  components: {
    Tabs,
    Toast
  },
  computed: {
    ...mapState('playlist', ['playlists', 'toast'])
  },
  methods: {
    ...mapMutations('playlist', ['setPlaylists'])
  }
}
</script>

<template>
  <div id="app">
    <transition name="fade">
      <Toast v-if="toast.status" v-bind="toast" />
    </transition>
    <Tabs />
    <router-view />
  </div>
</template>

<style lang="scss">
/**
G
*/
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700');

* {
  box-sizing: border-box;
}

body {
  background: linear-gradient(to right, #3a6186, #89253e);
}

a {
  text-decoration: none;
  color: inherit;
}

#app {
  padding: $spacer/2;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  margin: 0;
  font-family: Montserrat;
  position: relative;
  @include at-break($break--small) {
    padding: $spacer;
  }
}
</style>
