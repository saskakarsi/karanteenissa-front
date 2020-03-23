<template>
    <v-container fluid>
      <v-card
        max-width="1200px"
        elevation="0"
        class="mx-auto py-6 px-6"
        style="margin-bottom: 40px">

        <v-col class="mx-auto text-center"><div></div>
            <h1 class="display-1">{{ menuTexts.app.mainTitle }}</h1>
        </v-col>

        <v-col cols="12 mx-auto">
        <v-select
          v-model="selectedLocation"
          :items="locs"
          menu-props="auto"
          :label="menuTexts.services.locationSelector"
          hide-details
          single-line
          clearable
        ></v-select>
      </v-col>
      <v-col cols="12 mx-auto">
        <v-select
          v-model="selectedCategory"
          :items="serviceCategories"
          menu-props="auto"
          :label="menuTexts.services.categorySelector"
          hide-details
          single-line
          clearable
        ></v-select>
      </v-col>


      <v-col class="mx-auto">
        <div class="text-center">
            <v-btn large rounded color="primary" dark to="/services">{{ menuTexts.home.searchButton }}</v-btn>
        </div>
        </v-col>

        <v-col class="mx-auto text-center" style="margin-top: 5em">
            <h1 class="headline">
              {{ menuTexts.home.kauppaApuText }}
              <a href="https://kauppa-apu.sharetribe.com/">kauppa-apu.com</a>.
            </h1>
            <br>
            <v-divider></v-divider>    
        </v-col>

        <v-col class="mx-auto text-center">
            <h1 class="headline">{{ menuTexts.app.frontTitle1 }}</h1>
        </v-col>

        <v-col class="mx-auto text-center">
            <h1 class="headline">{{ menuTexts.app.frontTitle2 }}</h1>
        </v-col>

        <v-col class="mx-auto">
        <div class="text-center">
            <v-btn rounded color="primary" style="margin: 10px" href="https://docs.google.com/forms/d/e/1FAIpQLScJs29BmU7OkDLyG0UU6UbPN65OUVy0Hdc5LmmBgQhXxHO0QQ/viewform?usp=sf_link" dark>{{ menuTexts.home.tellUsButton }}</v-btn>

            <v-btn rounded color="primary" style="margin: 10px" to='/tips' dark>{{ menuTexts.home.tipsButton }}</v-btn>

            <v-btn rounded color="primary" style="margin: 10px" href="https://www.facebook.com/groups/karanteenissa/" dark>{{ menuTexts.home.facebookButton }}</v-btn>
        </div>
        </v-col>
      </v-card>

    <v-col class="py-8 px-6">
        <v-footer
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
    </v-col>
    </v-container>
</template>

<script>
const services = require('../fixtures/services')
const locations = require('../fixtures/locations')
const { menuLocalizations } = require('../fixtures/locales')
const { getters, computeds } = require('../util/state')
const { getServices } = require('../util/services')
const { localizeLocations } = require('../util/localize')


export default {
    data: () => ({
      allLocations: undefined
    }),
    computed: {
      ...computeds,
      menuTexts: function () {
        return menuLocalizations[getters.locale().value]
      },
      svcs: function () {
        return getServices.call(this, services)
      },
      logQuery: function () {
        return this.$route.query
      },
      locs: function () {
        return localizeLocations(this.allLocations).map((loc) => loc.current)
      },
      serviceCategories: function () {
        return Array.from(new Set(services.map((svc) => svc.category)))
      }
    },
    created() {
        // Take the union of all predefined (=translated) locations
        // and locations found in the data; this way we can filter with
        // not-yet-translated locations as well
        var svcLocs = []
        for (const svc of services) {
          svcLocs = Array.from(new Set(svcLocs.concat(svc.locations)))
        }
        const allLocs = svcLocs.map((loc) => {
          const existingLoc = locations.find(l => l.name.fi == loc)
          if (existingLoc) return existingLoc
          return { name: { fi: loc }} // Localization want this format
        })
        this.allLocations = allLocs
    }
}
</script>