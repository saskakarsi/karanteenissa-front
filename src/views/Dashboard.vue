<template>
    <v-container fluid class="ma-0 pa-0">
<!-- IF ON DESKTOP -->
    <v-parallax
    dark
    src="img/forest.jpg"
    margin-left="auto"
    margin-rigth="auto"
    height="100%"
    v-if="!isMobile()"
    >
    <v-card
        width="1400px"
        elevation="0"
        class="mx-auto"
        style="margin: 7em"
        height="1000px"
        color="rgb(255, 0, 0, 0.0)"
    >
    <v-card
        width="1280px"
        elevation="3"
        class="mx-auto"
        style="margin: 0em"
        height="720px"
    >
    <iframe src="https://share.geckoboard.com/dashboards/CHX5NKPGAKIXSKQ3/" width="100%" height="100%" frameborder="0">Ladataan…</iframe>
    </v-card>
    </v-card>
    </v-parallax>
<!-- ELSE -->
        <v-card
            max-width="800px"
            elevation="0"
            class="mx-auto"
            style="margin: 2em"
            height="100%"
            v-else
            >
            </v-card>
    </v-container>
</template>

<script>
const { menuLocalizations } = require('../fixtures/locales')
const { getters, computeds , mutators} = require('../util/state')

export default {
    data: () => ({}),
    computed: {
      ...computeds,
      menuTexts: function () {
        return menuLocalizations[getters.locale().value]
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
  }
}
</script>