<template>
  <div class="sideNav">
    <va-sidebar :minimized="minimized" width="9vw" minimized-width="64px">
      <template v-for="item in items" :key="item.title">
        <va-sidebar-item :active="item.active">
          <va-sidebar-item-content>
            <va-sidebar-item-title>
              <!-- <div class="linkk" style="text-align: center; font-size: 20px">
                <router-link to="/memo">Page0</router-link>
              </div> -->
              <div class="linkk" style="text-align: center; font-size: 20px">
                <router-link to="/page" style="color: #000">Page1</router-link>
              </div>
            </va-sidebar-item-title>
          </va-sidebar-item-content>
        </va-sidebar-item>
      </template>
    </va-sidebar>
  </div>

  <va-checkbox v-model="minimized" class="mt-2" />
</template>
<script>
import MenuIcon from "./MenuIcon.vue";
export default {
  data() {
    return {
      components: { MenuIcon },
      items: [""],
      minimized: false,
    };
  },
};
</script>

<style lang="scss" scoped>
#wrapp {
  width: 10vw;
  .sideNav {
    .linkk {
      text-align: center;
    }
  }
}
</style>
