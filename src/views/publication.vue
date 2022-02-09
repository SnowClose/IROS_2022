<template>
  <div style="min-height: 600px;">
    <div class="news-page-en">
      <div class="container-command-head">
        <h2 class="container-command-head-span" style="padding: 0 20px">
          Publication
        </h2>
      </div>
      <div class="content-en">
        <h1>Publication | Proceeding</h1>
        <p>
          Papers submitted to The 4th International Conference on Informatics
          Engineering & Information Science (ICIEIS 2022) will be reviewed by
          technical committees of the conference. All accepted full papers will
          be published in SPIE - The International Society for Optical
          Engineering (ISSN: 0277-786X), which will be submitted for inclusion
          into EI Compendex, Scopus, Inspec.
        </p>

        <p>
          Note: All submitted articles should report original, previously
          unpublished research results, experimental or theoretical. Articles
          submitted to the conference should meet these criteria and must not be
          under consideration for publication elsewhere. We firmly believe that
          ethical conduct is the most essential virtual of any academic. Hence
          any act of plagiarism is a totally unacceptable academic misconduct
          and cannot be tolerated.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "publication",
  data() {
    return {};
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

