<template>
  <div class="app">
    <Header />
    <div class="mainContainer">
      <SideNav />
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Memo from "./Memo.vue";
import SideNav from "./SideNav.vue";
import Home from "./Home.vue";
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
  height: 86vh;
}
</style>
