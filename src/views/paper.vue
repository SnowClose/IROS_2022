<template>
  <div class="content">
    <!-- <div class="time">
      <el-divider><h2>Call for Paper | Topics of Internet</h2></el-divider>
      <div class="countdown">
        <div class="item">
          <h1>{{ day }}</h1>
          <p>DAYS</p>
        </div>
        <div class="item">
          <h1>{{ hour }}</h1>
          <p>HOURS</p>
        </div>
        <div class="item">
          <h1>{{ minute }}</h1>
          <p>MINUTES</p>
        </div>
        <div class="item">
          <h1>{{ second }}</h1>
          <p>SECONDS</p>
        </div>
      </div>
    </div> -->
    <div>
      <h5>
        The 4th International Conference on Informatics Engineering &
        Information Science (ICIEIS 2022) will bring together leading
        researchers, engineers and scientists in the domain of interest from
        around the world.
      </h5>
      <h3>
        Topics of interest for submission include, but are not limited to:
      </h3>
      <ul>
        <li></li>
        <li>· Air-space-ground integrated communication network technology</li>
        <li>· Biometrics</li>
        <li>· Circuit and system</li>
        <li>· Cooperativen-cooperative communications</li>
        <li>· Cryptography</li>
        <li>· Electromagnetic field and microwave technology</li>
        <li>· GPS and wireless positioning</li>
        <li>· Identification and trust methodology</li>
        <li>· Information hiding</li>
        <li>· Integrated stereo imaging and machine vision technology</li>
        <li>· Microelectronics and solid state electronics</li>
        <li>· Micro nano electronic technology</li>
        <li>· Physical Electronics</li>
        <li>· Photoelectric signal and information processing</li>
        <li>· Security issues</li>
        <li>· Steganography, watermarking</li>
        <li>· Signal processing</li>
        <li>· Sensors and Internet of things</li>
        <li>· Theory and technology of microwave/millimeter wave system</li>
      </ul>
      <br />
      <h5>
        All papers, both invited and contributed, will be reviewed by two or
        three experts from the committees. After a careful reviewing process,
        all accepted papers of ICIEIS 2022 will be submitted for indexing by EI
        Compendex and Scopus.
      </h5>
      <div class="note">
        <div>{{ `Note :` }}</div>
        <div>
          1) Both Abstract and Full Paper are welcomed. The author can make an
          oral presentation after the Abstract is accepted and the registration
          is finished.
        </div>

        <div>
          2) All submitted articles should report original, previously
          unpublished research results, experimental or theoretical. Articles
          submitted to the conference should meet these criteria and must not be
          under consideration for publication elsewhere. We firmly believe that
          ethical conduct is the most essential virtual of any academic. Hence
          any act of plagiarism is a totally unacceptable academic misconduct
          and cannot be tolerated.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "WebSitePaper",

  components: {},

  directives: {},

  data() {
    return {
      time: null,
      now: "",
      after: moment("2022-2-1"),
      second: "",
      hour: "",
      day: "",
      minute: "",
    };
  },
  // mounted() {
  //   this.time && clearInterval(this.time);
  //   this.time = setInterval(() => {
  //     this.now = moment();
  //     let totalTimeSecond = this.after.diff(this.now, "second");
  //     this.second = totalTimeSecond % 60;
  //     this.day = Math.floor(totalTimeSecond / 60 / 60 / 24);
  //     this.hour = Math.floor((totalTimeSecond / 60 / 60) % 24);
  //     this.minute = Math.floor((totalTimeSecond / 60) % 60);
  //     console.log(this.day, this.hour, this.minute, this.second);
  //   }, 1000);
  // },
  // destroyed() {
  //   this.time && clearInterval(this.time);
  // },
  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  padding: 50px;
  text-align: left;
  h3,
  h5 {
    text-align: left;
    padding: 0 50px;
  }
  ul {
    list-style: none;
    text-align: left;
    line-height: 30px;
  }
  .note {
    padding: 50px;
    line-height: 30px;
  }
}
.time {
  padding: 0 50px;
  margin-top: 20px;
  .countdown {
    display: flex;
    justify-content: space-around;
    h1 {
      margin: 10px 0;
      margin-bottom: 0px;
    }
    p {
      margin: 10px 0;
      margin-top: 0px;
      color: #919191;
    }
    .item {
      border: 1px solid #e1e1e1;
      background: #fcfcfc;
      padding: 0 10px;
      flex: 1;
      margin: 5px;
    }
  }
}
</style>
