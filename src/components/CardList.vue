<template>
  <div class="songs-list">
    <div v-for="(item, index) in items" :key="item.id" class="song">
      <div class="song__info">
        <slot name="info" :item="{ index, item }">
          <router-link :to="{ name: 'Playlists', params: { id: item.id } }">
            {{ item.id }}
          </router-link>
          <img :src="item.thumbnailUrl" class="song__thumbnail">
          <div class="song__description">
            <h1 class="song__title"> {{ item.title }} </h1>
            <h3 class="song__others"> {{ item.id }} | {{ item.albumName }} </h3>
          </div>
        </slot>
      </div>
      <div class="song__action">
        <slot name="action" :item="{ index, item }">
          <button class="button-wrapper">
            <img src="@/assets/play.png" alt="">
          </button>
          <button @click="$emit('add::song', item.id)" class="button-wrapper">
            <img src="@/assets/add.png" alt="">
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardList',
  props: {
    items: {
      type: [Array, Object],
      default: () => []
    },
    allowSelect: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.songs-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .song {
    padding: $spacer/2;
    width: 100%;
    background: #ffffff;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    position: relative;
    @include at-break($break--small) {
      width: 60%;
    }
    .select {
      position: absolute;
      top: 0;
      left: 0;
    }

    &__thumbnail {
      width: 48px;
      height: 48px;
      min-width: 48px;
    }

    h1 {
      font-size: 20px;
      font-weight: 500;
      line-height: 1.3;
      text-transform: capitalize;
      color: #3f5980;
    }

    &__info {
      display: flex;
      max-width: 100%;
      align-items: center;
      flex-wrap: wrap;
      @include at-break($break--base) {
        width: 60%;
        flex-wrap: nowrap;
      }
      a {
        margin-right: $spacer/3;
      }
      img + div {
        margin-top: $spacer/4;
        @include at-break($break--base) {
          margin-left: $spacer/2;
        }
      }
    }

    &__others {
      font-weight: 14px;
      color: #3b3d3f;
      line-height: 1;
    }

    &__others + &__others {
      margin-top: $spacer/3;
    }

    &__action {
      margin-top: $spacer/2;
      display: flex;
      justify-content: space-around;
      width: 100%;
      @include at-break($break--base) {
        margin-top: 0;
        display: initial;
        width: initial;
      }
      img {
        width: 32px;
        @include at-break($break--base) {
          margin-top: 0;
        }
      }

      .button-wrapper + .button-wrapper {
        margin-left: $spacer;
      }
    }
  }

  .song + .song {
    margin-top: $spacer/4;
  }

  .load-more {
    padding: $spacer/2 $spacer;
    background: #cab2b2;
    color: #3f5980;
    margin: $spacer/2 0;
  }
}
</style>
