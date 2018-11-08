<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        NUXT×Firebase
      </h1>
      <h2 class="subtitle">
        Vue.js×SSR×SPA×PWA×firebase
      </h2>
      <div class="links">
        <button type="button" @click="onGoogleLogout">ログアウト</button>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    AppLogo
  },
  methods: {
    ...mapActions([
      'logout'
    ]),
    onGoogleLogout () {
      this.logout()
        .then(() => {
          this.$router.push('/login')
        })
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style lang="scss" scoped>

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

