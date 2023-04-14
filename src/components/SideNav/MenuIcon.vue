<template>
  <input type="checkbox" id="menuicon" />
  <label for="menuicon"><span></span><span></span><span></span></label>
</template>
<script>
export default {};
</script>
<style>
input[id="menuicon"] {
  display: none;
}
input[id="menuicon"] + label {
  display: block;
  width: 60px;
  height: 30px;
  position: relative;
  cursor: pointer;
}
input[id="menuicon"] + label span {
  display: block;
  position: absolute;
  width: 70%;
  height: 5px;
  border-radius: 30px;
  background: #ffffff;
  transition: all 0.35s;
}
input[id="menuicon"] + label span:nth-child(1) {
  top: 0;
}
input[id="menuicon"] + label span:nth-child(2) {
  top: 40%;
  transform: translateY(-50);
}
input[id="menuicon"] + label span:nth-child(3) {
  bottom: 0;
}

input[id="menuicon"]:checked + label span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}
input[id="menuicon"]:checked + label span:nth-child(2) {
  opacity: 0;
}
input[id="menuicon"]:checked + label span:nth-child(3) {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}
</style>
