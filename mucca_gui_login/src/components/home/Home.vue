<template>
  <div class="home">
    <Loading v-if="action.authorization === false"/>
    <div class="content">
      <p v-if="action.authorization === true">HomePage</p>
    </div>
  </div>
</template>
<script src="./script/script.js"></script>
<style src="./style/style.css"></style>
