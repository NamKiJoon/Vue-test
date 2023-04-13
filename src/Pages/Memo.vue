<template>
  <div class="memo">
    <div class="act">
      <va-button @click="add()">추가</va-button>
    </div>
    <ul>
      <li v-for="d in state.data" key="d">
        {{ d.content }}
        <span>
          <va-button @click="edit(d.id)">수정</va-button>
          <!-- <button class="btn btn-primary" @click="dlt(d.id)">삭제</button> -->
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from "vue";
import axios from "axios";
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primeicons/primeicons.css";
import "primevue/resources/primevue.min.css";

export default {
  setup() {
    const state = reactive({
      data: [],
    });

    axios.get("/api/memos/").then((res) => {
      state.data = res.data;
    });

    const edit = (id) => {
      const content = prompt(
        "내용을 입력해주세요",
        state.data.find((d) => d.id === id).content
      );
      axios
        .put("/api/memos/" + id, { content })
        .then((res) => {
          state.data = res.data;
        })
        .catch((error) => {
          console.error(error);
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
  width: 90vw;
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
