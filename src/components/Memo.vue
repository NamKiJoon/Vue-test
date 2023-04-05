<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
      <!-- <button class="btn btn-primary" @click="dlt()">- 삭제</button> -->
    </div>
    <ul>
      <li v-for="(d, index) in state.data" key="index">{{ d }}</li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";

export default {
  setup() {
    const state = reactive({
      data: [],
    });

    axios.get("/api/memos").then((res) => {
      state.data = res.data;
    });

    const add = () => {
      const content = prompt("입력");
      //   state.data.push("추가된 내용");
      axios.post("/api/memos", { content }).then((res) => {
        state.data = res.data;
        console.log(res.data);
      });
    };
    return { state, add };
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
      border: 1px solid #eee;
    }
  }
}
</style>
