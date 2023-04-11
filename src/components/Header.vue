<template>
  <div id="header">
    <header v-for="(dataa, i) in headNav" key="i">{{ dataa }}</header>
  </div>
</template>

<script>
export default {
  name: `Header`,
  data() {
    return {
      headNav: [`Btn1`, `Btn2`, `Btn3`],
    };
  },
};
</script>

<style scoped>
/*템플릿 안에있는 요소만 스타일을 사용하겠다!*/
header {
  text-align: center;
  padding: 25px;
  border-bottom: 1px solid #c0c0c0;
  background-color: #f7f7f7;
  width: 100vw;
}
#header {
  display: flex;
  height: 8vh;
  width: 100vw;
}
</style>
