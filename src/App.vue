<template>
  <div>
    <mt-header  title="固定在顶部"></mt-header>
    
    <router-view/>

    <mt-tabbar v-model="selected">
      <mt-tab-item id="home">
        <img slot="icon" src="./assets/img/index.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="member">
        <img slot="icon" src="./assets/img/vip.png">
        会员
      </mt-tab-item>
      <mt-tab-item id="shopcar">
        <img slot="icon" src="./assets/img/shop.png">
        购物车
      </mt-tab-item>
      <mt-tab-item id="search">
        <img slot="icon" src="./assets/img/find.png">
        查找
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selected: ''
    }
  },
  watch: {
    selected (newV, oleV) {
      this.$router.push({
        name:newV
      })
    }
  }
}
</script>
<style>
body{
  margin: 0px;
}
</style>
