<template>
  <div class="va-sidebar__menu">
    <va-navbar color="#282F69" style="height: 100px">
      <template #left>
        <!-- <va-navbar-item><MenuIcon /></va-navbar-item> -->
        <va-navbar-item class="logo">
          <router-link to="/" style="color: #fff">RC</router-link>
        </va-navbar-item>
      </template>
      <template #right> </template>
    </va-navbar>
  </div>
</template>

<style scoped>
#check-btn {
  display: none;
}
#check-btn:checked ~ .menubars {
  display: block;
}
.menubars {
  display: none;
}
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>

<script setup>
import { computed } from "vue";
import { useColors } from "vuestic-ui";
import MenuIcon from "../SideNav/MenuIcon.vue";

const { currentPresetName } = useColors();

const darkNavbarColors = computed(() => {
  if (currentPresetName.value === "light") {
    return {
      color: "#111111",
      textColor: "#BAFFC5",
    };
  } else {
    return {
      color: "#FBCAF6",
      textColor: "#481269",
    };
  }
});
</script>

<style scoped>
#icon {
  cursor: pointer;
}
.logo {
  font-weight: 600;
  font-size: 1.5rem;
}
</style>
