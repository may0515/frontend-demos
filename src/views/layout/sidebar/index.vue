<template>
  <div>
    <el-menu mode="vertical"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="!sidebar.opened"
    :router="routerTrue">
      <el-menu-item v-for="item in menus" :index="'/' + item.code" :key="item.code">
        <svg-icon :name="item.icon" :iconClass="`svg-icon svg-white`"/>
        <span slot="title">{{$t('label.' + item.title)}}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import '@/icons/svg/introduction.svg'
import '@/icons/svg/validation.svg'
import '@/icons/svg/chart.svg'
import { mapGetters } from 'vuex'
export default {
  name: 'sidebar',
  data () {
    return {
      routerTrue: true
    }
  },
  created () {
  },
  computed: {
    ...mapGetters([
      'menus'
    ]),
    sidebar () {
      return this.$store.getters.sidebar
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
@import '../../../style/layout/sidebar/index.scss';
</style>
