<template>
  <div class="verification">
    <div class="login-win">
      <div class="verify-box bground-color-right">
        <div class="loginForm">
          <h1>Complete Registration</h1>
          <p>
            <input
              id="password"
              v-model="user.password"
              type="password"
              name="password"
              placeholder="PASSWORD"
              required
            >
          </p>
          <p class="center-button">
            <button class="button-primary-inverted" @click="verifyUser">OK</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./script/script.js"></script>
<style src="./style/style.css"></style>
