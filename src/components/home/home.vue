<template>
  <div>
    <!-- 上有轮播图，下有九宫格 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,index) in imgs" :key="index">
        <img :src="item.imgUrl">
      </mt-swipe-item>
    </mt-swipe>
    <div class="grid">
      <my-ul>
        <my-li v-for="(grid,index) in grids" :key="index">
          <a href>
            <span :class="grid.className"></span>
            <div>{{grid.title}}</div>
          </a>
        </my-li>
      </my-ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: [],
      grids: [
        { className: "news",  title: "新闻资讯" },
        { className: "photo", title: "图文分享" },
        { className: "photo", title: "图文分享" },
        { className: "photo", title: "图文分享" },
        { className: "photo", title: "图文分享" },
        { className: "photo", title: "图文分享" },
        { className: "photo", title: "图文分享" },
        { className: "photo", title: "图文分享" },
        { className: "photo", title: "图文分享" },
        { className: "photo", title: "图文分享" }
      ]
    };
  },
  created() {
    this.$axios
      .get("lunbo.json")
      .then(res => {
        this.imgs = res.data.imglist;
        console.log(res.data.imglist);
      })
      .catch(err => console.log(err));
  }
};
</script>
<style scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe img {
  width: 100%;
  height: 100%;
}
.news {
  background-image: url(../../assets/img/news.png);
  display: inline-block;
  height: 50px;
  width: 50px;
  background-repeat: round;
  margin: 10px 0px;
}
</style>