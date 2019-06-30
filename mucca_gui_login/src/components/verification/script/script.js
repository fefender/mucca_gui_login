import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  name: "Verification",
  mounted() {
    console.log("mounted verification");
    // this.$router.push("/home");
    //           this.$route.params.pathMatch = true;
  },
  created() {
    console.log("created verification", this.$route.params.regtok);
    this.user.regtok = this.$route.params.regtok;
  },
  destroyed() {},
  methods: {
    verifyUser() {
      if (this.user.password === this.user.passwordTwo) {
        let api =
          process.env.VUE_APP_PROTOCOLL +
          process.env.VUE_APP_APIBASEURL +
          "/" +
          process.env.VUE_APP_SSO_VERSION +
          "/" +
          process.env.VUE_APP_SSO_SERVICE_NAME +
          "/" +
          process.env.VUE_APP_SSO_VERIFY;
        axios({
          method: "POST",
          url: api,
          headers: {
            "Content-Type": "application/json"
          },
          data: {
            token: this.user.regtok,
            password: this.user.password
          }
        }).then(
          result => {
            if (result.status === 201) {
              // if (VueCookies.isKey("pendentUser")) {
              //   let username = VueCookies.get("pendentUser");
              //   VueCookies.set("username", username);
              //   this.logIn(username);
              // }
              this.verification.status = true;
              this.$router.push("/home");
              this.$route.params.pathMatch = true;
            }
          },
          error => {
            // this.confirm.sent = false;
          }
        );
      }
    },
    goToLogin() {
      this.$router.push("/home");
      this.$route.params.pathMatch = true;
    },
    logIn(username) {
      console.log(username);
    }
  },
  data() {
    return {
      user: {
        password: "",
        passwordTwo: "",
        regtok: ""
      },
      verification: {
        status: false
      }
    };
  }
};
