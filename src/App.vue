<template>
  <v-app>

    <v-app-bar app elevation=0 hide-on-scroll color="primary">
      <v-btn text dark large elevation=0 to="/"><v-icon>mdi-home</v-icon></v-btn>
      <v-btn text dark large elevation=0 to="/services">{{ menuTexts.serviceButton }}</v-btn>
      <v-btn text dark large elevation=0 to="/contact">{{ menuTexts.contactButton }}</v-btn>
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn
            elevation=0
            v-on="on"
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

    <!-- Sizes your content based upon application components -->
    <v-content>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <!-- If using vue-router -->
        <v-row align="center" justify="center">
          <router-view></router-view>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
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
  }),
  computed: {
    ...getters,
    menuTexts: function () {
      return menuLocalizations[getters.locale().value].app
    }
  },
  methods: {
    ...mutators,
  },
  created() {
      document.title = "Karanteenissa"
  }
};
</script>
