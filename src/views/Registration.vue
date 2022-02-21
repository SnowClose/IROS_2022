<template>
  <div class="news-page-en">
    <div class="container-command-head">
      <h2 class="container-command-head-span" style="padding: 0 20px">
        Registration
      </h2>
    </div>
    <div class="content-en">
      <div>Download the Invitation Letter</div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="Items" label="Items"> </el-table-column>
        <el-table-column prop="Registration" label="Registration fee">
          <template slot-scope="scope">
            <div v-html="scope.row.Registration"></div>
          </template>
        </el-table-column>
      </el-table>
      <br>
      <img
        src="https://fhk.ais.cn/cms/website/editor/202111/329211102145714915.png"
        alt=""
        width="249"
      />
      <div>
        Details of the attending registration<br />

        Join as Presenter: If you are interested in giving presentation on
        conference, without publishing your paper in the proceeding, you can
        choose to attend ICIEIS 2022 as a Presenter. As presenter, you need to
        submit the abstract and title of your presentation before register. For
        further information, please contact us at: icieis2022@163.com<br />
        Join as Listener: ICIEIS 2022 is an unmissable conference. It is a good
        chance and an effective platform to meet many renowned experts and
        researchers in the filed of latest academic research. You are welcome to
        attend this great event. You need to complete the registration as
        Listener before the registration deadline.<br />

        <br />

        Details of the registration fees<br />

        1. Registration fees for ICIEIS 2022 Regular is USD550 / 3200 RMB per
        paper.<br />

        2. If the length of the paper exceeds 6 Pages, the cost of Each Extra
        Page (begin at Page 6) is USD60 / 300RMB.<br />

        3. Registration fees include conference proceedings, lunches, gifts and
        attending all technical sessions.<br />

        4. The registration fee does not include:
        <br />
        • Accommodation<br />

        • Visa application fee<br />

        • Transportation fee<br />

        5. At least one author for each accepted final paper must pre-register.
        <br />

        6. Completed registrations will be acknowledged by the Organizing
        Committee within 2-5 workdays after receiving your payment.<br />

        7. If you cannot attend the conference due to some reasons, we will mail
        the proceedings and invoice to you. <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebSiteKeynotespeakers",
  data() {
    return {
      tableData: [
        {
          Items: "Regular Registration(4-6 pages)",
          Registration:
            "500 USD/per paper (4 -6pages)<br>3200 CNY/per paper (4-6 pages)",
        },
        {
          Items: "Group Submission - Manuscripts ≥ 3",
          Registration:
            "480 USD/ per paper (4-6 pages)<br>3000 CNY/per paper (4 -6pages)",
        },
        {
          Items: "Extra Pages (Begin at Page 6)",
          Registration: "50 USD/ per extra page<br>300 CNY/per extra page ",
        },
        {
          Items: "Attendees without Submission",
          Registration: "200 USD/per person<br>1200 CNY/per person",
        },
        {
          Items: "Attendees without Submission (Groups）",
          Registration:
            "180 USD/per person（≥ 3 person）<br>1000 CNY/per person（≥ 3 person）",
        },
        {
          Items: "Purchase Extra Journal",
          Registration: "80 USD/book<br>500 CNY/book",
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

