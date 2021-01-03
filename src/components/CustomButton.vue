<template>
  <button @click="$emit('click')" class="button-wrapper custom-btn" :class="{ [`${size}`]: true }">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    text: {
      type: String,
      default: 'Press me!'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.button-wrapper.custom-btn {
  border: none;
  border-radius: 20px;
  transition: 0.3s;
  color: white;
  font-weight: bold;
  background: linear-gradient(to right, #3a6186, #89253e);
  margin: $spacer/2 0;
}

.button-wrapper.custom-btn.normal {
  padding: $spacer/2 $spacer * 1.5;
}
.button-wrapper.custom-btn.small {
  padding: $spacer/3 $spacer/2;
}
</style>
