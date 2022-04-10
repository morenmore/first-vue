<template>
  <v-app>
    <!-- v-app-bar 시작 -->
    <v-app-bar app color="purple lighten-2" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Cat Logo"
          class="shrink mr-2"
          contain
          :src="require('@/assets/cat.png')"
          transition="scale-transition"
          width="40"
        />
        <!-- <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        /> -->
      </div>
      <v-tabs centered>
        <v-tab to="/">홈</v-tab>
        <v-tab to="/free">자유게시판</v-tab>
      </v-tabs>
      <template v-if="$user.token">
        <!-- <span class="mr-2">{{ $user.name }}님 반갑습니다.</span>
        <v-btn text @click="$user.clear" style="display: inline-block">
          <span class="mr-2">로그아웃</span>
        </v-btn> -->
        <v-menu bottom min-width="200px" rounded offset-y>
          <template v-slot:activator="{ on }">
            <v-btn icon x-large v-on="on">
              <v-avatar color="brown" size="48">
                <span class="white--text text-h5">{{ $user.initials }}</span>
              </v-avatar>
            </v-btn>
          </template>
          <v-card>
            <v-list-item-content class="justify-center">
              <div class="mx-auto text-center">
                <v-avatar color="brown">
                  <span class="white--text text-h5">{{ $user.initials }}</span>
                </v-avatar>
                <h3>{{ $user.name }}</h3>
                <p class="text-caption mt-1">
                  {{ $user.email }}
                </p>
                <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text @click="$user.clear">
                  로그아웃
                </v-btn>
                <!-- <v-divider class="my-3"></v-divider>
                <v-btn depressed rounded text> Disconnect </v-btn> -->
              </div>
            </v-list-item-content>
          </v-card>
        </v-menu>
      </template>
      <template v-else>
        <router-link to="/login">
          <v-btn text style="display: inline-block">
            <v-icon>mdi-account</v-icon>
            <span class="mr-2">로그인</span>
          </v-btn>
        </router-link>
      </template>
    </v-app-bar>
    <!-- v-app-bar 끝 -->
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      items: [
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' }
      ]
    }
  },
  computed: {},
  methods: {}
}
</script>
