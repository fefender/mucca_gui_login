import axios from 'axios'
import VueCookies from 'vue-cookies'

export default {
  name: 'loading',
  mounted () {
    console.log('mounted loading')
  },
  created () {
    console.log("created loading")
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed () {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize () {
      this.window.width = window.innerWidth
      this.window.height = window.innerHeight
    }
  },
  data () {
    return {
      window: {
        width: 0,
        height: 0
      }
    }
  }
}
