<template>
  <div class="home">
    <!-- <el-carousel>
      <el-carousel-item v-for="item in 4" :key="item">
        <img
          style="width: 100%; height: 100%"
          src="../assets/img/collepse.png"
          alt=""
        />
      </el-carousel-item>
    </el-carousel> -->
    <div class="carousel">
      <img src="../assets/img/collpse.jpeg" alt="" />
    </div>
    <div class="con describe">
      <div class="mes">
        <h3>
          The 5<sup>th</sup> International Conference on Informatics Engineering
          & Information Science (ICIEIS 2022)
        </h3>
        <!-- <p>COVID-19 Information and Resources</p>
        <p>https://corona.go.jp/en/dashboard/</p>
        <p>
          https://graphics.reuters.com/world-coronavirus-tracker-and-maps/countries-and-territories/japan/
        </p> -->
      </div>
      <div>
        <h1>Welcome to ICIEIS 2022</h1>
        <p>
          On behalf of the organizing committee, we warmly invite you to
          participate in the 5<sup>th</sup> International Conference on
          Informatics Engineering {{ `&` }} Information Science (ICIEIS 2022)
          which will be held at Tianjin, China during May 6-8, 2022.
        </p>
        <p>
          The previous conference of ICIEIS took place in Malaysia (2011
          {{ `&` }} 2013), and Poland (2014) successfully. ICIEIS is a leading
          annual conference of informatics engineering and information science
          for researchers around the world. Known for its strong leadership team
          and dependable reputation, ICIEIS has a wide network of sponsors and
          supporters globally. The 2022 edition of this special conference has
          raised the bar again for the informatics and the engineering
          professional field, and every participant is invited to contribute on
          this exciting platform, sharing research findings and insights as well
          as generating new ideas to help advancing the forefront of technology.
        </p>
        <p>
          The blend of unique perspectives and experiences makes for energetic
          discussions and exchange of ideas. It's not just the speakers that
          share their knowledge. Every participant of ICIEIS 2022 is welcomed
          and expected to contribute. Share your research findings, pose
          questions, and generate new ideas!
        </p>
        <div class="img_content">
          <div class="item">
            <img src="../assets/img/deline.png" alt="" />
            <div>
              <p>Submission Deadline</p>
              <p>March. 30, 2022</p>
            </div>
          </div>
          <div class="item">
            <img src="../assets/img/date.png" alt="" />
            <div>
              <p>Notification Date</p>
              <p>April. 15, 2022</p>
            </div>
          </div>
          <div class="item">
            <img src="../assets/img/redeadline.png" alt="" />
            <div>
              <p>Registration Deadline</p>
              <p>April. 30, 2022</p>
            </div>
          </div>
          <div class="item">
            <img src="../assets/img/condate.png" alt="" />
            <div>
              <p>Conference Date</p>
              <!-- <p style="color: red">(Postponed)</p> -->
              <p>May. 6-8, 2022</p>
            </div>
          </div>
        </div>
        <h1>Keepnote Speakers | ICIEIS</h1>
        <div class="teacher_content">
          <div class="item">
            <img
              src="https://fhk.ais.cn/cms/website/editor/202107/345210702170637542.jpg"
              width="220"
              height="220"
              alt=""
            />
            <h4 class="name">Prof. Weihua Gui</h4>
            <h4>Central South University, China</h4>
            <h4>*Academician of the Chinese Academy of Engineering</h4>
            <h4>*Academic leader of National Natural Science Fund</h4>
          </div>
          <div class="item">
            <img
              src="https://fhk.ais.cn/cms/website/editor/202107/345210702170849561.jpg"
              width="220"
              height="220"
              alt=""
            />
            <h4 class="name">Prof. Weihua Gui</h4>
            <h4>Central South University, China</h4>
            <h4>*Academician of the Chinese Academy of Engineering</h4>
            <h4>*Academic leader of National Natural Science Fund</h4>
          </div>
          <div class="item">
            <img
              src="https://fhk.ais.cn/cms/website/editor/202107/345210702172145637.jpg"
              width="220"
              height="220"
              alt=""
            />
            <h4 class="name">Prof. Chunhua Yang</h4>
            <h4>Central South University, China</h4>
            <h4>*National Hundred</h4>
            <h4>*New Century Excellent Talent</h4>
          </div>
          <div class="item">
            <img
              src="https://fhk.ais.cn/cms/website/editor/202107/385210706171459279.png"
              style="height: 160px; padding-top: 34px; padding-bottom: 20px"
              alt=""
            />
            <h4 class="name">Prof. Guanglin Li</h4>
            <h4>
              Shenzhen Institutes of Advanced Technology, Chinese Academy of
              Sciences, China
            </h4>
            <h4>
              *Director of the Institute of Integrated Technology and the Key
            </h4>
            <h4>
              Laboratory of Human-Machine Intelligent Collaboration System,
              SIAT-CAS
            </h4>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="time">
      <h2 style="text-align: left">
        Time to the IROS 2022 Paper Submission Deadline
      </h2>
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
    <div class="sponsor">
      <h1>Sponsor</h1>
      <img src="../assets/img/shendaligong.png" alt="" />
      <div>
        Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences
        (SIAT-CAS), China
      </div>
    </div>
    <div class="co-sponsor">
      <h1>Co-Sponsor</h1>
      <div class="school_item">
        <div class="item">
          <img src="../assets/img/dalianhaishi.png" alt="" />
          <div>Dalian Maritime University</div>
        </div>
        <div class="item">
          <img src="../assets/img/minhang.png" alt="" />
          <div>Civil Aviation University of China</div>
        </div>
        <div class="item">
          <img src="../assets/img/tianjin.png" alt="" />
          <div>Tianjin University</div>
        </div>
        <div class="item">
          <img src="../assets/img/gongyu.png" alt="" />
          <div>Beijing Technology and Business University</div>
        </div>
        <div class="item">
          <img src="../assets/img/kunmingligong.jpeg" alt="" />
          <div>Kunming University of Science and Technology</div>
        </div>
        <div class="item">
          <img src="../assets/img/345210704191220147.png" alt="" />
          <div>Hunan University of Science and Technology</div>
        </div>
        <div class="item">
          <img src="../assets/img/zhongke.png" alt="" />
          <div>
            Tianjin Chinese-Academy-of-Sciences Institute of Advanced Technology
            Co., Ltd.
          </div>
        </div>
        <div class="item">
          <img src="../assets/img/haibin.png" alt="" />
          <div>
            Science and Technology Association of Tianjin Binhai New Area
          </div>
        </div>
        <div class="item">
          <img src="../assets/img/binhaigaoxin.png" alt="" />
          <div>Tianjin Binhai Hi-Tech Industrial Development Zone</div>
        </div>
        <div class="item">
          <img src="../assets/img/jisuantianjin.jpg" alt="" />
          <div>National SuperComputer Center in Tianjin</div>
        </div>
      </div>
    </div>
    <div class="organizer">
      <h1>Organizer</h1>
      <img src="../assets/img/organizer.png" alt="" />
    </div>
    <div class="quick-links">
      <h1>Quick Links</h1>
      <div style="background: #dbe5f1; margin: 50px; padding: 20px">
        <h3 style="text-align: left">Contact Us</h3>
        <div class="quick-links_content">
          <div class="item">
            <p>Conference Secretary: Leo</p>
            <p>email: icieis2022@163.com</p>
            <p>phone: +86-15111243628(Wechat)</p>
            <!-- <p>orhers: aeic_wendy (WeChat)</p> -->
          </div>
          <div class="item">
            <p>Dr. Chan</p>
            <!-- <p>email: zg.chen1@siat.ac.cn</p> -->
            <p>phone: +86-18810516562 (Wechat)</p>
          </div>
          <div class="item">
            <p>
              <span style="color: #000000">&gt;&nbsp; </span>
              <a
                href="https://fhk.ais.cn/cms/website/document/202107/464c5ef1759592ee9cf2397dd78a69b2.doc"
                target="_blank"
                ><span style="color: #548dd4"
                  ><strong>Template (Full Paper)</strong></span
                ></a
              >
            </p>
            <p>
              <span style="color: #000000">&gt;&nbsp; </span
              ><a
                href="https://fhk.ais.cn/cms/website/document/202107/5fc75309dc9b833a38b493c344ecd293.doc"
                target="_blank"
                ><span style="color: #548dd4"
                  ><strong>Template (Abstract)</strong></span
                ></a
              >
            </p>
          </div>
          <div class="item">
            <p>
              <span style="color: #000000">&gt;&nbsp; &nbsp;</span
              ><a
                href="https://easychair.org/conferences/?conf=icieis2022"
                target="_blank"
                ><span style="color: #548dd4"
                  ><strong>Submission Online (Easy Chair)</strong></span
                ></a
              >
            </p>
            <p></p>
            <p>
              <span style="background-color: #dbe5f1; color: #000000"
                >&gt;&nbsp; &nbsp;<a
                  href="https://www.ais.cn/attendees/toSignUp/ZBRIIQ"
                  target="_blank"
                  ><strong
                    ><span style="background-color: #dbe5f1; color: #548dd4"
                      >Registration for Attending</span
                    ></strong
                  ></a
                ></span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "Home",
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
};
</script>
<style lang="scss" scoped>
.school_logo {
  display: flex;
  flex-shrink: 0;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: space-around;

  padding: 15px 0 0 15px;
  img {
    // flex: 1;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.5s;
    }
  }
}
.con {
  width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  text-align: left;
  h1,
  h2 {
    text-align: center;
  }
  .mes {
    background: #fcfcfc;
    border: 1px solid #e1e1e1;
    border-radius: 5px;
    text-align: center;
  }
}
.carousel {
  width: 100%;
  img {
    width: 100%;
    height: auto;
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
.content1 {
  display: flex;
  padding: 50px;
  h2 {
    text-align: left;
  }
  .paper {
    flex: 1;
    button {
      box-shadow: none;
      border: none;
      padding: 10px 20px;
      background: #64205c;
      color: #fff;
    }
  }
  .video {
    flex: 1;
    video {
      width: 100%;
      height: 300px;
    }
  }
}
.history {
  padding: 0 50px;
}
.img_content {
  display: flex;
  .item {
    flex: 1;
    // margin: 10px 0;
    display: flex;
    img {
      width: 60px;
      height: 60px;
      margin: 20px;
    }
  }
}
.teacher_content {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .item {
    text-align: center;
    width: 50%;
    min-width: 500px;
    padding: 0 auto;
    img {
      height: 220px;
      width: auto;
    }
    .name {
      color: #31859b;
    }
  }
}
.school_item {
  padding: 0 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  .item {
    width: 33%;
    margin: 10px 0;
    img {
      height: 42px;
    }
  }
}
.quick-links_content {
  display: flex;
  padding: 50px;
  padding-top: 0;
  .item {
    flex: 1;
    text-align: left;
  }
}
.quick-link,
.organizer,
.co-sponsor,
.sponsor {
  margin-bottom: 50px;
}
</style>
