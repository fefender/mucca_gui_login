import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  name: "Login",
  mounted() {
    console.log("mounted");
  },
  created() {
    console.log("created");
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
    if (VueCookies.isKey("token") && VueCookies.isKey("key")) {
      this.authorizationMiddware();
    }
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    registerHere() {
      this.action.type = "register";
    },
    loginHere() {
      this.action.type = "login";
    },
    requestlogin() {
      if (this.login.pot.length === 0) {
        let api =
          process.env.VUE_APP_PROTOCOLL +
          process.env.VUE_APP_APIBASEURL +
          "/" +
          process.env.VUE_APP_SSO_VERSION +
          "/" +
          process.env.VUE_APP_SSO_SERVICE_NAME +
          "/" +
          process.env.VUE_APP_SSO_AUTHENTICATION;

        axios({
          method: "POST",
          url: api,
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            username: this.login.username,
            password: this.login.password
          }
        }).then(
          result => {
            if (result.status === 201) {
              this.auth.status = result.status;
              VueCookies.set("token", result.data.token);
              VueCookies.set("key", result.data.key);
              this.$router.push("/home");
              this.$route.params.pathMatch = true;
            }
          },
          error => {
            this.auth.status = error.response.status;
            if (VueCookies.isKey("token")) {
              VueCookies.remove("token");
            }
            if (VueCookies.isKey("key")) {
              VueCookies.remove("key");
            }
          }
        );
      } else {
        this.auth.status = 401;
      }
    },
    authorizationMiddware() {
      let api =
        process.env.VUE_APP_PROTOCOLL +
        process.env.VUE_APP_APIBASEURL +
        "/" +
        process.env.VUE_APP_SSO_VERSION +
        "/" +
        process.env.VUE_APP_SSO_SERVICE_NAME +
        "/" +
        process.env.VUE_APP_SSO_AUTHORIZATION;

      axios({
        method: "GET",
        url: api,
        headers: {
          "Content-Type": "application/json",
          token: VueCookies.get("token"),
          key: VueCookies.get("key")
        }
      }).then(
        result => {
          if (result.status !== 200) {
            if (VueCookies.isKey("token")) {
              VueCookies.remove("token");
            }
            if (VueCookies.isKey("key")) {
              VueCookies.remove("key");
            }
            this.$router.push("/");
            this.$route.params.pathMatch = true;
          }
          if (result.status === 200) {
            this.$router.push("/home");
            this.$route.params.pathMatch = true;
          }
        },
        error => {
          if (VueCookies.isKey("token")) {
            VueCookies.remove("token");
          }
          if (VueCookies.isKey("key")) {
            VueCookies.remove("key");
          }
        }
      );
    },
    requestNewUser() {
      alert(this.reg.newusername);
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    }
  },
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      action: {
        type: "login"
      },
      auth: {
        status: 0
      },
      login: {
        username: "",
        password: "",
        pot: ""
      },
      reg: {
        newusername: ""
      }
    };
  }
};
