<script>
export default {
  name: 'Tabs',
  data () {
    return {
      tabs: [
        {
          label: 'Songs',
          link: '/songs'
        },
        {
          label: 'Playlists',
          link: '/playlists'
        }
      ]
    }
  }
}
</script>

<template>
  <div class="tabs">
    <router-link v-for="tab in tabs" :to="tab.link" :key="tab.label" class="tabs__item">
      {{ tab.label }}
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
.tabs {
  display: flex;
  border-radius: 10px;
  margin-bottom:$spacer/2;
  &__item {
    padding: $spacer/2 $spacer;
    background: wheat;
    text-decoration: none;
    & + & {
      border-left: 1px solid;
    }
  }

}
</style>
