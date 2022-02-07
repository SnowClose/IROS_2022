<template>
  <div class="news-page-en">
    <div class="container-command-head">
      <h2 class="container-command-head-span" style="padding: 0 20px">
        Accepted workshops
      </h2>
    </div>
    <div class="content-en">
      <div v-for="item in data" :key="item" class="item">
        <img width="140px" :src="item.img" alt="" />
        <div>
          <h3 class="title">{{ item.title }}</h3>
          <p>{{ item.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebSiteKeynotespeakers",
  data() {
    return {
      data: [
        {
          img: "https://fhk.ais.cn/cms/website/functional/pic/202110/360211012105248590.png",
          title: "Topic：Theoretical Analysis and engineering application of complex systems",
          content: 'Organized by: Prof. Chao-Yang Chen, Prof. Lin Zhao and Dr. Juan Chen'
        },
      ],
    };
  },
  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.news-page-en {
  margin: 20px auto;
  width: 1200px;
  box-shadow: 0px 2px 10px 0px #ccc;
}
.container-command-head {
  width: 1200px;
  height: 58px;
  background: #f3f3f3;
  border-radius: 10px 10px 0px 0px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  /* margin-top: 20px; */
}
.content-en {
  margin-top: 10px;
  width: 1200px;
  font-size: 14px;
  font-family: SourceHanSansCN-Medium, SourceHanSansCN;
  font-weight: 500;
  color: black;
  line-height: 28px;
  background-color: white;
  width: 1200px;
  padding-left: 35px;
  box-sizing: border-box;
  margin-left: 0 !important;
  padding-right: 35px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-align: center;
  }
  .item {
    box-shadow: 0px 2px 10px 0px #ccc;
    display: flex;
    padding: 20px;
    img {
      margin-right: 20px;
    }
  }
}
</style>

