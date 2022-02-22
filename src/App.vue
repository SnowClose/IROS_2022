<template>
  <div id="app" class="con">
    <div class="top"></div>
    <div class="web_nav">
      <el-menu
        :default-active="activeTab"
        class="el-menu-demo"
        router
        mode="horizontal"
        background-color="#fff"
        text-color="#64205c"
        active-text-color="#64205c"
      >
        <!-- <div class="logo">
          <img src="../src/assets/img/iros2022_p-300x164.png" alt="" />
        </div> -->
        <el-menu-item index="organizer">Organizations</el-menu-item>
        <el-menu-item index="contact">Contact</el-menu-item>

        <el-submenu index="3">
          <template slot="title">Program</template>
          <el-menu-item index="agenda">Agenda </el-menu-item>
          <el-menu-item index="venue">Venue</el-menu-item>
        </el-submenu>
        <el-submenu index="1">
          <template slot="title">Author Guides</template>
          <el-menu-item index="Submission">Submission </el-menu-item>
          <el-menu-item index="publication">Publication</el-menu-item>
          <el-menu-item index="Registration">Registration</el-menu-item>
          <el-menu-item index="Download">Download</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">Contributing</template>
          <el-menu-item index="paper">Call for Paper </el-menu-item>
          <el-menu-item index="Workshop">Call for Workshop</el-menu-item>
          <el-menu-item index="workshops">Accepted workshops</el-menu-item>
        </el-submenu>

        <el-menu-item index="speaker">Keynote Speakers</el-menu-item>
        <el-menu-item index="committee">Committee</el-menu-item>
        <el-menu-item index="home">Home</el-menu-item>
      </el-menu>
    </div>

    <div class="view">
      <router-view />
    </div>
    <div class="footer">
      <span class="copyright">© Copyright - IROS 2022</span>
      <div style="line-height: 30px">
        Copyright© The 5<sup>th</sup> International Conference on Informatics
        Engineering {{ `&` }} Information Science (ICIEIS 2022)<br />
        The 5<sup>th</sup> International Conference on Informatics Engineering
        {{ `&` }} Information Science (ICIEIS 2022) http://www.icieis2022.com/
      </div>
      <!-- <ul class="noLightbox social_bookmarks icon_count_3">
        <li>
          <a href="https://iros2022.org/committee/" itemprop="url">Committee</a>
        </li>
        <li>
          <a href="https://iros2022.org/contributing/" itemprop="url"
            >Contributing</a
          >
        </li>
        <li>
          <a href="https://iros2022.org/program/" itemprop="url">Program</a>
        </li>
        <li>
          <a href="https://iros2022.org/registration/" itemprop="url"
            >Registration</a
          >
        </li>
        <li>
          <a href="https://iros2022.org/local-info/" itemprop="url"
            >Local-info</a
          >
        </li>
        <li>
          <a href="https://iros2022.org/contact/" itemprop="url">Contact</a>
        </li>
      </ul> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
  data() {
    return {
      activeTab: "home",
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  word-wrap: break-word;
  word-break: break-all;
  hyphens: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
  margin: 0;
}
a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  // &.router-link-exact-active {
  //   color: #42b983;
  // }
}
.web_nav {
  position: fixed;
  z-index: 999;
  width: 100%;
}
.con {
  // margin-top: 60px;
  position: relative;
  width: 100%;
  margin: 0 auto;
  // padding: 0px 50px;
  clear: both;
}
.view {
  padding-top: 60px;
}
#nav {
  padding: 30px;
}
.logo {
  height: 60px;
  float: left;
  padding-left: 50px;
  img {
    height: 100%;
  }
}
.el-menu.el-menu--horizontal {
  padding: 0 50px;
}
.el-menu--horizontal > .el-submenu,
.el-menu--horizontal > .el-menu-item {
  float: right !important;
}
.footer {
  padding: 0 50px;
  background: #64205c;
  line-height: 60px;
  font-size: 12px;
  height: 60px;
  display: flex;
  color: #fff;
  justify-content: space-around;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      a {
        color: #fff;
      }
      display: inline-block;
      color: #fff;
      margin: 0 5px;
      &::after {
        content: "|";
        margin-left: 5px;
      }
    }
    li:last-child {
      &::after {
        content: "";
        margin-left: 0;
      }
    }
  }
}
</style>
