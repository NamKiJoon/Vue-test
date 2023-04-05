<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="(d, index) in data" key="index">{{ d }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    const data = ["data - 1", "data - 2", "data - 3", "data - 4", "data - 5"];
    const add = () => {
      data.push("추가된 내용");
    };
    return { data };
  },
};
</script>

<style lang="scss" scoped>
.memo {
  .act {
    padding: 10px 10px 5px 5px;
    text-align: right;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    li {
      padding: 15px;
      margin: 5px 10px;
    }
  }
}
</style>
