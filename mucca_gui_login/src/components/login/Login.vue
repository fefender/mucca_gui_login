<template>
  <section class="section has-text-centered">
    <div class="login-win login-win-left bground-color-left">
      <div class="content-text">
        <h1>Welcome</h1>
        <p>Register for an MUCCA account here.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div v-if="action.type === 'login'">
          <button class="button-primary" @click="registerHere">REGISTER HERE</button>
        </div>
        <div v-else-if="action.type === 'register'">
          <button class="button-primary" @click="loginHere">LOGIN HERE</button>
        </div>
      </div>
    </div>
    <div class="login-win login-win-right bground-color-right">
      <div class="content-text">
        <div class="loginForm" v-if="action.type === 'login'">
          <h1>
            Login
            <span class="msg-error-auth" v-if=" auth.status === 401">Not authorized!</span>
          </h1>

          <input id="pot" v-model="login.pot" type="text" name="pot" placeholder=" " class="pot">

          <p>
            <input
              id="usernale"
              v-model="login.username"
              type="text"
              name="username"
              placeholder="USERNAME"
              required
            >
          </p>
          <p>
            <input
              id="password"
              v-model="login.password"
              type="password"
              name="password"
              placeholder="PASSWORD"
              required
            >
          </p>

          <p>
            <button class="button-primary-inverted" @click="requestlogin">LOGIN</button>
          </p>
        </div>
        <div class="loginForm" v-else-if="action.type === 'register'">
          <h1>Register</h1>
          <p>
            <input
              id="newusername"
              v-model="reg.newusername"
              type="text"
              name="newusername"
              placeholder="EMAIL"
            >
          </p>
          <p>
            <button class="button-primary-inverted" @click="requestNewUser">CREATE NEW USER</button>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script src="./script/script.js"></script>
<style src="./style/style.css"></style>
