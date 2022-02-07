<template>
  <div class="news-page-en">
    <div class="container-command-head">
      <h2 class="container-command-head-span" style="padding: 0 20px">
      </h2>
    </div>
    <div class="content-en">
    </div>
  </div>
</template>

<script>
export default {
  name: "WebSiteKeynotespeakers",
  data() {
    return {
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
  h1, h2, h3, h4, h5, h6 {
    text-align: center;
  }
  .item {
    position: relative;
    margin-bottom: 40px;
    .title {
      word-break: break-all;
      background-color: rgb(75, 172, 198);
      color: #fff;
      font-weight: bold;
      font-size: 20px;
      padding: 10px 20px;
    }
  }
}
</style>

