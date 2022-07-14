<template>
  <view style="height: 100% !important;">
    <my-login v-if="myStatus === 1"></my-login>
    <my-info v-else></my-info>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {}
    },
    computed: { ...mapState('my', ['myStatus']) },
  }
</script>

<style lang="scss">

</style>
