<template>
  <div class="verification">
    <div class="login-win">
      <div class="verify-box bground-color-right">
        <div class="loginForm" v-if="verification.status === false">
          <h1>Complete Registration</h1>
          <p>Insert your password.</p>
          <p>It has to contain at least 8 characters.</p>
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
          <p>Repeat password</p>
          <p>
            <input
              id="password"
              v-model="user.passwordTwo"
              type="password"
              name="password"
              placeholder="CONFIRM PASSWORD"
              required
            >
          </p>
          <p class="center-button">
            <button class="button-primary-inverted" @click="verifyUser">OK</button>
          </p>
        </div>
        <div class="loginForm" v-else-if="verification.status === true">
          <h1>Registration Completed</h1>
          <p>You can now login.</p>
          <p class="center-button">
            <button class="button-primary-inverted" @click="goToLogin">OK</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./script/script.js"></script>
<style src="./style/style.css"></style>
