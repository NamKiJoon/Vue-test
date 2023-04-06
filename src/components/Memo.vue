<template>
  <div class="memo">
    <div class="act">
      <button class="btn btn-primary" @click="add()">+ 추가</button>
    </div>
    <ul>
      <li v-for="d in state.data" key="d.id">
        {{ d.content }}
        <span>
          <button class="btn btn-primary" @click="edit(d.id)">수정</button>
        </span>
      </li>
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

    const edit = (id) => {
      const content = prompt(
        "내용을 입력해주세요",
        state.data.find((d) => d.id === id).content
      );
      axios.put("/api/memos/" + id, { content }).then((res) => {
        state.data = res.data;
      });
    };

    const add = () => {
      const content = prompt("입력");
      if (!content) {
        alert("입력!");
        return add();
      }
      axios.post("/api/memos", { content }).then((res) => {
        state.data = res.data;
        console.log(res.data);
      });
    };
    return { state, add, edit };
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

      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
