<template>
  <div class="news-page-en">
    <div class="container-command-head">
      <h2 class="container-command-head-span" style="padding: 0 20px">
        Keynote Speakers
      </h2>
    </div>
    <div class="content-en">
      <div class="item" v-for="(item, index) in data" :key="index">
        <h1>{{ item.name }}</h1>
        <div class="content">
          <div v-for="(des, desi) in item.des" :key="'des' + desi" style="text-align: center;">
            {{ des }}
          </div>
        </div>
        <img :src="item.img" alt="" />
        <div style="text-align: left;" v-html="item.html"></div>
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
          name: 'Prof.Weihua Gui',
          des: [
            'Central South University, China',
            '*Academician of the Chinese Academy of Engineering',
            '*Academic leader of National Natural Science Fund',
            '*CPC Member'
          ],
          img: 'https://fhk.ais.cn/cms/website/editor/202107/345210704155028931.jpg',
          html: 'Biography: <br>Gui Weihua, a CPC member, obtained his Master’s Degree in Industrial Automation at Central South Institute of Mining and Metallurgy.<br>Professor Gui, a famous expert and scholar in industrial automation of non-ferrous metal, is an academic leader of National Natural Science Fund for Creative Research Groups and director of Engineering Research Center of "Colored Metallurgical Automation" of the Ministry of Education. In November 2013, he was elected as Academician of Chinese Academy of Engineering.<br>Professor Gui focuses on the resources, energy and environmental issues that restrict the development of China’s nonferrous metals industry. With long-term study in the theory, technology and application of engineering on complex non-ferrous metal production process control, he found the key to the automation of smelting the non-ferrous metals such as copper, aluminum, lead, zinc, aluminum, etc. and of aluminium fabrication, which proves to be a great success in applications. He has won 3 awards of National Science and Technology Progress Award, 15 provincial and ministerial Scientific and Technological Progress Awards. He is winner of the Ho Leung Ho Lee Foundation Science and Technology Progress Award in 2009 and the Hunan Guangzhao Technology Award in 2012, and has the honor of the Outstanding Scientific and Technological Worker, China Nonferrous Metals Industry Outstanding Scientific and Technological Workers, China Process Control Technology Contribution Award and other titles.'
        },
        {
          name: 'Prof.Guanglin Li',
          des: [
            'Shenzhen Institutes of Advanced Technology, Chinese Academy of Sciences (SIAT-CAS), China',
            'Director of the Key Laboratory of Human-Machine Intelligent Collaboration System, SIAT-CAS',
            'Director of the Institute of Integrated Technology, SIAT-CAS',
          ],
          img: 'https://fhk.ais.cn/cms/website/editor/202107/385210706165637226.png',
          html: 'Biography:<br>Professor Li is Director of the Key Laboratory of Human-Machine Intelligent Collaboration System, Chinese Academy of Sciences, and Director of the Institute of Integrated Technology, Shenzhen Institute of Advanced Technology, Chinese Academy of Sciences (SIAT-CAS),. In 2009, he returned to China to be fully engaged in biomimetic rehabilitation robot, human-machine intelligent enhancement and interaction and other research. His research direction is human-machine intelligent interaction, neural rehabilitation engineering, rehabilitation robots and information processing and instrument of biological medicine. Professor Li designed a virtual training system of rehabilitating hands and make it a success. In recent years, Li has published over 80 papers among which more than 40 were included by SCI journals such as JAMA and IEEE transactions. At present, he has presided over two key programs of the National Natural Science Foundation of China (2 projects), 973 Project and 863 Project. Given his academic influence, he was once designated as a review expert on the National Science and Technology Progress Award, 863 Project and some key projects of National Natural Science Foundation of China. Currently, he is the international consultant of Journal of Physiological Measurement, and Associate Editor of IEEE Journal of Biomedical and Health Informatics. Besides, he is also Vice Chairman of the Chinese Society of Artificial Intelligence-Brain-Computer Fusion and Biological Machine Intelligence Professional Committee, Deputy Chairman of the Rehabilitation Engineering Branch of the Chinese Society of Biomedical Engineering, and Deputy Secretary General of the Rehabilitation Medicine Development Research Association of Guangdong Province. In addition, he is an expert who was rewarded with special government allowances of the State Council of the People‘s Republic of China.'
        },
        {
          name: 'Prof.Chunhua Yang',
          des: [
            'Central South University, China',
            '*National Hundred',
            '*New Century Excellent Talent',
            '*Winner of National Science Fund for Distinguished Young Scholars'
          ],
          img: 'https://fhk.ais.cn/cms/website/editor/202107/345210704161717987.jpg',
          html: 'Biography: <br>Prof. Yang’s research interests mainly include control of complex industrial processes, online measurement and equipment for process industries. She received multiple project funding, including the Key Program, and Distinguished Young Scholars Fund of the National Nature Science Fund of China, the National High Technology Research and Development Program of China, the National Key Technology Research and Development Program of the Ministry of Science and Technology of China, University-Enterprise collaborative research project. She has won the Second Prize of National Science and Technology Progress for 4 times. She published more than 100 papers in journals, such as IEEE Transactions on Industrial Electronics, IEEE Transactions on Neural Networks, Journal of Process Control, Control Engineering Practice, Mineral Engineering and so on. She is a vice-chair of the IFAC Technical Committee on Mining, Mineral and Metal Processing. She serves for China Association of Automation in different roles, including technical committee member on control theory, vice-chair of the technical committee on process control. She is also the vice-chair and Secretary-General of Automation Technologies Committee in Nonferrous Metals Society of China.'
        },
        {
          name: 'Prof.Meng Joo Er',
          des: [
            '*Changjiang Scholar Distinguished Professor',
            '*National Hundred',
          ],
          img: 'https://fhk.ais.cn/cms/website/editor/202107/345210704153543907.png',
          html: 'Biography: <br>Professor Meng Joo Er is currently Changjiang Scholar Distinguished Professor and Director of Institute on Artificial Intelligence and Marine Robotics at the School of Marine Electrical Engineering, Dalian Maritime University, China. He was Professor in Electrical and Electronic Engineering, Nanyang Technological University, Singapore from 1992-2020. He served as the Founding Director of Renaissance Engineering Programme and an elected member of the NTU Advisory Board and from 2009 to 2012. He served as a member of the NTU Senate Steering Committee from 2010 to 2012. '
        },
        {
name: 'Prof.Haibin Duan',
          des: [
            'Beihang University, China',
            '*Winner of National Science Fund for Distinguished Young Scholars',
            '*Distinguished Professor of Chang Jiang Scholars',
            '*National Ten Thousands'
          ],
          img: 'https://fhk.ais.cn/cms/website/editor/202107/345210704162322016.jpg',
          html: 'Biography: <br>Duan Haibin, Professor and Doctoral Advisor in the subjects such as navigation, guidance and control discipline in Beihang University, is Distinguished Professor of “Yangtze River Scholars” of the Ministry of Education. He once won the National Science Fund for Distinguished Young Scholars. Besides, Professor Duan is selected as the "Ten Thousand Talents Plan"-Leading Talents in Technological Innovation, "Ten Thousand Talents Plan"-the first batch of top-notch young talents of the Organization Department of the Central Committee, and the Young and Middle-Aged Technological Innovation Leaders of the Ministry of Science and Technology. In addition, he is honored as the New Century Outstanding Talents of the Ministry of Education, the Rising Star of Science and Technology in Beijing, the Academic Leader of the National Defense Key Laboratory of Integrated Aircraft Control Technology, and the sixth-batch Chief Science Communication Experts of the Chinese Association for Science and Technology. As for research direction, Professor Duan is engaged in the research on the automatic control of Unmanned aerial vehicle based on bio-inspired intelligence.'
        
        }
      ]
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

