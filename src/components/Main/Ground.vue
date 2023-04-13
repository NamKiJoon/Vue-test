<template>
  <div class="app">
    <Header />
    <div class="mainContainer">
      <SideNav />
      <router-view />
    </div>
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Header from "../TopNav/Header.vue";
import Footer from "../Footer/Footer.vue";
import Memo from "../../Pages/Memo.vue";
import SideNav from "../SideNav/SideNav.vue";
import Home from "../../Pages/Home.vue";
export default {
  name: `Ground`,
  components: { Footer, Memo, Header, SideNav, Home },
  data() {
    return {};
  },
};
</script>

<style>
.mainContainer {
  display: flex;
  height: 90vh;
}
</style>
