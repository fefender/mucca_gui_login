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
      console.log("Verification");
    }
  },
  data() {
    return {
      user: {
        password: "",
        regtok: ""
      }
    };
  }
};
