<template>
    <v-container fluid>
      <back-to-top bottom="50px" right="50px">
        <v-btn class="mx-2  btn-to-top" large fab dark color="primary">
          <v-icon dark>mdi-arrow-up</v-icon>
        </v-btn>
      </back-to-top>
      <v-row>
      <v-col cols="10 mx-auto">
        <v-select
          style= "margin-top: 2em"
          v-model="selectedLocation"
          :items="locs"
          menu-props="auto"
          :label="menuTexts.locationSelector"
          hide-details
          single-line
          clearable
        ></v-select>
      </v-col>
      <v-col cols="10 mx-auto">
        <v-select
          style= "margin-top: 1em; margin-bottom: 3em"
          v-model="selectedCategory"
          :items="serviceCategories"
          menu-props="auto"
          :label="menuTexts.categorySelector"
          hide-details
          single-line
          clearable
        ></v-select>
      </v-col>
      </v-row>
      <v-row dense>
        <v-col
          sm="6"
          md="2"
          v-for="card in svcs"
          :key="card.title"
          :cols="12"
        >
          <v-card
            elevation=2
            hover
            :href="card.link"
            target="_blank"
            max-width="300px"
            class="mx-auto"
          >
            <v-card-title class="headline" v-text="card.langs.fi.title" style="font-weight: bold"></v-card-title>         
            <v-img
              :src="card.img_src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
              height="200px"
            >
            </v-img>
            <v-card-subtitle v-text="card.langs.fi.desc" style="font-weight: 600;"></v-card-subtitle>

          </v-card>
        </v-col>
      </v-row>
      <v-row style="margin-top: 80px">
      <v-col>
      <v-footer
        absolute
        class="font-weight-medium"
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
          </div>
          <strong>Karanteenissa.fi</strong> - {{ new Date().getFullYear() }}
        </div>
      </section>
        </v-col>
      </v-footer>
      </v-col>
      </v-row>
    </v-container>
</template>

<script>
const services = require('../fixtures/services')
const locations = require('../fixtures/locations')
const { menuLocalizations } = require('../fixtures/locales')
const { getServices } = require('../util/services')
const { getters, computeds } = require('../util/state')
const { localizeLocations } = require('../util/localize')


export default {
    data: () => ({
      allLocations: undefined
    }),
    computed: {
      ...computeds,
      menuTexts: function () {
        return menuLocalizations[getters.locale().value].services
      },
      svcs: function () {
        return getServices.call(this, services)
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