<template>
  <div id="wrapp">
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/memo">Memo</router-link>
      <router-link to="/page">Page1</router-link>
      <router-link to="/page2">Page2</router-link>
      <router-link to="/page3">Page3</router-link>
      <router-link to="/setting">Setting</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   nav: [`Link1`, `Link2`, `Link3`],
    };
  },
};
</script>

<style lang="scss" scoped>
#wrapp {
  width: 10vw;
  .nav {
    width: 10vw;
    height: 90vh;
    background-color: #efefef;
    text-align: center;
    border-right: 1px solid #c0c0c0;
    display: flex;
    flex-direction: column;
    a {
      text-decoration: none;
      color: #000;
      margin-bottom: 20px;
      height: 5vh;
      line-height: 5vh;
    }
    a:hover {
      background-color: #acacac;
    }
  }
}
</style>
