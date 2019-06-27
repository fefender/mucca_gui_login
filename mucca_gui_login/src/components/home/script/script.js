import axios from "axios";
import VueCookies from "vue-cookies";
import Loading from "../../loading/Loading";

export default {
  name: "Home",
  components: {
    Loading
  },
  created() {
    if (VueCookies.isKey("token") && VueCookies.isKey("key")) {
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
            if (VueCookies.isKey("username")) {
              VueCookies.remove("username");
            }
            this.$router.push("/");
            this.$route.params.pathMatch = true;
          }
          if (result.status === 200) {
            VueCookies.set("username", result.data.username);
            this.action.authorization = true;
          }
        },
        error => {
          if (VueCookies.isKey("token")) {
            VueCookies.remove("token");
          }
          if (VueCookies.isKey("key")) {
            VueCookies.remove("key");
          }
          if (VueCookies.isKey("username")) {
            VueCookies.remove("username");
          }
          this.$router.push("/");
          this.$route.params.pathMatch = true;
        }
      );
    } else {
      this.$router.push("/");
      this.$route.params.pathMatch = true;
    }
  },
  mounted() {},
  methods: {},
  data() {
    return {
      action: {
        authorization: false
      }
    };
  }
};
