<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

      <v-img
        alt="Vuetify Name"
        class="shrink mt-1 hidden-sm-and-down"
        contain
        min-width="100"
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
        width="100"
      />
    </div>

    <v-spacer> </v-spacer>

    <!-- <v-btn
      :to = ""
      target="_blank"
      text
    > -->
    <template v-if="$user.token">
      <span class="mr-2">{{ $user.name }}님 반갑습니다.</span>
      <v-btn target="_blank" text @click="$user.clear">
        <span class="mr-2">LOGOUT</span>
      </v-btn>
    </template>
    <template v-else>
      <router-link to="/login">
        <v-btn target="_blank" text>
          <v-icon>mdi-account</v-icon>
          <span class="mr-2">LOGIN</span>
        </v-btn>
      </router-link>
    </template>
  </v-app-bar>
</template>

<script>
// import { createNamespacedHelpers } from 'vuex'

// const { mapState: userMapState } = createNamespacedHelpers('user')

export default {}
</script>

<style></style>
