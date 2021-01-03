<template>
  <input :value="searchedText" @input="$emit('input', $event.target.value)" type="text" class="search" placeholder="Search for songs..." autocomplete="off">
</template>

<script>
export default {
  name: 'SearchInput',
  props: {
    searchedText: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.search {
  margin: $spacer/2;
  font-family: Montserrat;
  background: #FFFFFF;
  width: 100%;
  padding: $spacer/2  $spacer;
  border-radius: 30px;
  border: none;
  color: #F49390;
  cursor: pointer;
  font-size: 1em;
  transition: width 1s ease;
  @include at-break($break--base) {
    font-size: 1.6em;
    width: 70%;
  }

  &::placeholder {
    color: pink;
  }

  &:focus { outline: none; }
}
</style>
