<script>
import success from '@/assets/success.png'
import failure from '@/assets/failure.png'
import { mapMutations } from 'vuex'

export default {
  name: 'Toast',
  props: {
    status: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconImg () {
      return this.status === 'success' ? success : failure
    }
  },
  methods: {
    ...mapMutations('playlist', ['setToast'])
  }
}
</script>

<template>
  <div :class="`toast ${status}`" >
    <div class="content">
      <img class="icon" :src="iconImg" :alt="iconImg" >
      <p> {{ message }} </p>
    </div>
    <img class="icon" src="@/assets/cancel.png" alt="close" @click="setToast({})">
  </div>
</template>

<style lang="scss" scoped>
.toast {
  position: absolute;
  top: 10%;
  right: 20px;
  padding: $spacer/2 $spacer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .content {
    display: flex;
    align-items: center;
    justify-content: space-betwe
  }

  * + * {
    margin-left: $spacer/4;
  }

  .icon {
    width: 16px;
    height: 16px;
  }
}

.toast.success {
  background: #b8e0b8;
}

.toast.failure {
  background: #e0b8b8;
}
</style>
