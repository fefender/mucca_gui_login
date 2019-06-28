<template>
  <div class="home">
    <Loading v-if="action.authorization === false"/>
    <div class="content" v-if="action.authorization === true">
      <h1>Welcome {{user.userGroup}}</h1>
      <p>HomePage</p>
    </div>
  </div>
</template>
<script src="./script/script.js"></script>
<style src="./style/style.css"></style>
