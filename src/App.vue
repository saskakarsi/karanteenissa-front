<template>
  <v-app>
    

    <div v-if="!isMobile()">
      <v-app-bar app elevation=0 hide-on-scroll color="primary">

      <v-btn text dark large elevation=0 to="/"><v-icon>mdi-home</v-icon></v-btn>
      <v-divider
      class="mx-4"
      vertical
      dark
      inset
      ></v-divider>

        <v-btn text dark large elevation=0 to="/services">{{ menuTexts.serviceButton }}</v-btn>
      <v-divider
      class="mx-4"
      vertical
      dark
      inset
      ></v-divider>
        <v-btn text dark large elevation=0 to="/contact">{{ menuTexts.contactButton }}</v-btn>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              elevation=0
              v-on="on"
              color="primary"
              
            >
              language
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="item in locales"
              :key="item.value"
              @click="setLocale(item)"
            >
              <v-list-item-title>{{ item.lang }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
    <div v-else>
      <v-app-bar dark app elevation=0 hide-on-scroll color="primary">
        <v-app-bar-nav-icon large @click="drawer = true"></v-app-bar-nav-icon>
        <v-spacer></v-spacer>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              elevation=0
              v-on="on"
              color="primary"
            >
            Language
            </v-btn>
          </template>
          <v-list>
            <v-list-item
              v-for="item in locales"
              :key="item.value"
              @click="setLocale(item)"
            >
              <v-list-item-title>{{ item.lang }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        fixed
        temporary
      >
        <v-list nav>
            <v-list-item href="#/">
              <v-list-item-icon>
                <v-icon color="primary">mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ menuTexts.homeButton }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="#/services">
              <v-list-item-icon>
                <v-icon color="primary">mdi-book-open-variant</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ menuTexts.serviceButton }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item href="#/contact">
              <v-list-item-icon>
                <v-icon color="primary">mdi-mailbox-open</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>{{ menuTexts.contactButton }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
        </v-list>
      </v-navigation-drawer>
    </div>

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid class="ma-0 pa-0">

        <!-- If using vue-router -->
        <v-row align="center" justify="center">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>

    <v-footer
      app
      absolute
      class="font-weight-medium"
      height="100"
    >
      <v-col
      class="text-center"
      cols="12"
      >
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
              <section id="lab_social_icon_footer">
            <div class="social-icon">
              <div class="text-center center-block">
                <a style="margin: 5px" href="https://www.facebook.com/karanteenissa"><i id="social-fb"
                    class="fa fa-facebook-square fa-3x social"></i></a>
                <a style="margin: 5px" href="https://www.instagram.com/karanteenissa.fi/"><i id="social-ig"
                    class="fa fa-instagram fa-3x social"></i></a>
                <a style="margin: 5px" href="https://twitter.com/karanteeni20"><i id="social-tw"
                    class="fa fa-twitter-square fa-3x social"></i></a>
                <a style="margin: 5px" href="https://github.com/saskakarsi/karanteenissa-front"><i id="social-gh"
                    class="fa fa-github-square fa-3x"></i></a>
              </div>
              <strong>Karanteenissa.fi</strong> - {{ new Date().getFullYear() }}
            </div>
          </section>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
const { locales, menuLocalizations } = require('./fixtures/locales')
const { getters, mutators } = require('./util/state')

export default {
  name: 'App',

  data: () => ({
    locales,
    drawer: false
  }),
  computed: {
    ...getters,
    menuTexts: function () {
      return menuLocalizations[getters.locale().value].app
    }
  },
  methods: {
    ...mutators,
    isMobile: function () {
      const toMatch = [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i
      ];
      return toMatch.some((toMatchItem) => {
          return navigator.userAgent.match(toMatchItem);
      });
    }
  },
  created() {
      document.title = "Karanteenissa"
  }
};
</script>
