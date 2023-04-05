<template>
  <div class="app">
    <Header />
    <div>content</div>
    <Memo />
    <Footer />
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Memo from "./Memo.vue";
export default { components: { Footer, Memo, Header } };
</script>

<style></style>
