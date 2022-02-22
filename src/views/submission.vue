<template>
  <div class="content">
    <div class="title">
      <h3>Submission</h3>
    </div>
    <h1>Submission Methods</h1>
    <ul>
      <li>1.The submitted papers must not be under consideration elsewhere.</li>
      <li>
        2.Please send the full paper(word+pdf) to <a href="https://easychair.org/conferences/?conf=icieis2022" target="_blank">Easy Chair.</a>
      </li>
      <li>
        3.Please submit the full paper, if presentation and publication are both
        needed.
      </li>
      <li>
        4.Please submit the abstract only, if you just want to make
        presentations.
      </li>
      <li>5.Templates Download: Templates</li>
    </ul>
    <br />
    <div class="note">
      <div>
        {{ `Note: ` }}
      </div>
      <div>
        1)Both Abstract and Full Paper are welcomed. The author can make an oral
        presentation after the Abstract is accepted and the payment is finished.
      </div>
      <div>
        2)All submitted articles should report original, previously unpublished
        research results, experimental or theoretical. Articles submitted to the
        conference should meet these criteria and must not be under
        consideration for publication elsewhere. We firmly believe that ethical
        conduct is the most essential virtual of any academic. Hence any act of
        plagiarism is a totally unacceptable academic misconduct and cannot be
        tolerated.
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WebSiteSubmission",

  components: {},

  directives: {},

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
.content {
  padding: 50px;
  text-align: left;
  .title {
    background: #f3f3f3;
    padding: 10px 0;
  }
  h1,
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
</style>
