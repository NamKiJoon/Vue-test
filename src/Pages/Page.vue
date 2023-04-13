<template>
  <va-carousel
    style="height: 80vh; width: 40vw; margin-left: 10vw; margin-top: 5vh"
    v-model="value"
    :items="items"
    :ratio="21 / 9"
  />

  <UserInput />
</template>

<script>
import UserInput from "../components/UserText/UserInput.vue";
export default {
  components: { UserInput },
  data() {
    return {
      value: 0,
      items: [
        "img1.jpg",
        "https://picsum.photos/1500",
        "https://picsum.photos/1501",
        "https://picsum.photos/1502",
        "https://picsum.photos/1503",
        "https://picsum.photos/1504",
        "https://picsum.photos/1505",
        "https://picsum.photos/1506",
        "https://picsum.photos/1507",
        "https://picsum.photos/1508",
        "https://picsum.photos/1509",
      ],
    };
  },
};
</script>
<style></style>
