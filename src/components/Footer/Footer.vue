<template>
  <div class="footer">
    <v-footer class="bg-grey-lighten-1">
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link"
          color="white"
          variant="text"
          class="mx-2"
          rounded="xl"
        >
          {{ link }}
        </v-btn>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Acryl</strong>
        </v-col>
      </v-row>
    </v-footer>
  </div>
</template>

<script>
export default {
  data: () => ({
    links: ["Contact Us"],
  }),
};
</script>

<style scoped lang="scss">
.footer {
  width: 99vw;
  background-color: #efefef;
  text-align: right;
  height: 7vh;
  bottom: 0;
}
.bg-grey-lighten-1 {
  width: 100vh;
  /* background-color: yellow; */
}
</style>
