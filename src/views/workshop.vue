<template>
  <div class="content">
    <div class="title">
      <h3>Call for Workshop</h3>
    </div>
    <h3>
      The ICIEIS 2022 technical program will highlight a series of workshops to
      complement the regular program with new or emerging topics of particular
      interest to the information science and informatics engineering.
      Prospective organizers of workshops should submit proposals with the
      following information:
    </h3>
    <ul>
      <li>Title</li>
      <li>
        Motivation, indicating the novelty of the topic and any possible
        interdisciplinary flavor
      </li>
      <li>Short biography of the organizers</li>
      <li>
        List of five to ten contributed papers (including titles, authors,
        contact information of the corresponding author, and a short abstract).
        Upon acceptance of the workshop proposal, the contributed papers will be
        submitted in the same format as regular papers.
      </li>
    </ul>
    <br />
    <h4>
      Proposals will be evaluated based on the timeliness of the topic and on
      the qualifications of the organizers and of the authors of the contributed
      papers as well.
    </h4>
    <h2>Deadlines</h2>
    <ul>
      <li>Proposals Due: March 30, 2022</li>
      <li>Notification of Acceptance: 1-2 weeks after submission</li>
      <li>
        Submission of full five-page papers for approved workshop: Within 2
        weeks after acceptance
      </li>
    </ul>
    <h3>
      Proposals should be submitted to <a>icieis2022@163.com</a> before the
      deadline.
    </h3>
    <div class="note">
      The papers in each accepted workshop will undergo a review process before
      acceptance, similar to the other regular papers. It is the responsibility
      of the organizers to ensure that their workshop papers meet ICIEIS quality
      standards. In case a paper in a workshop paper does not meet the expected
      quality, it will be rejected and an effort will be made to draw papers
      from the regular submission process to fill in the gap. If too many papers
      for a given workshop are not accepted in the review process and we are
      unable to find suitable substitutes from the regular review pool, the
      workshop may be canceled. Any further inquiries should be sent to:
      <a>icieis2022@163.com</a>
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
  a {
    color: #548dd4;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    text-align: left;
    padding: 0 50px;
  }
  ul {
    text-align: left;
    line-height: 30px;
  }
  .note {
    padding: 50px;
    line-height: 30px;
  }
}
</style>
