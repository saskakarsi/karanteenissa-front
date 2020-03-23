<template>
    <v-container fluid class="ma-0 pa-0">
      <back-to-top bottom="50px" right="50px">
        <v-btn class="mx-2 btn-to-top" large fab dark color="primary">
          <v-icon dark>mdi-arrow-up</v-icon>
        </v-btn>
      </back-to-top>
      <v-parallax
        dark
        src="img/forest.jpg"
        margin-left="auto"
        margin-rigth="auto"
        height="auto"
      >
        <v-card
            max-width="1200px"
            elevation="0"
            class="mx-auto py-6 px-6"
            style="margin-bottom: 3em margin-top: 3em"
            color="rgb(255, 0, 0, 0.0)"
            dark>
          <v-row>
            <v-select
              class="mx-auto py-2 px-6"
              style= "margin-top: 0em; margin-bottom: 0em"
              v-model="selectedLocation"
              :items="locs"
              menu-props="auto"
              :label="menuTexts.locationSelector"
              hide-details
              single-line
              clearable
              solo
              light
            >
            </v-select>
            <v-select
            class="mx-auto py-2 px-6"
              style= "margin-top: 0em; margin-bottom: 0em"
              v-model="selectedCategory"
              :items="serviceCategories"
              menu-props="auto"
              :label="menuTexts.categorySelector"
              hide-details
              single-line
              clearable
              solo
              light
            ></v-select>
          </v-row>
        </v-card>
      </v-parallax>
    <v-card
          max-width="1200px"
          elevation="0"
          class="mx-auto py-6 px-6"
          style="margin-bottom: 40px margin-top: 40px"
          light>
      <v-row dense>
        <v-col
          sm="6"
          md="4"
          xl="3"
          lg="3"
          xs="12"
          v-for="card in svcs"
          :key="card.title"
          :cols="12"
        >
          <v-card
            elevation=2
            hover:style="color: white"
            hover
            :href="card.link"
            target="_blank"
            max-width="300px"
            class="mx-auto"
          >
            <v-card-title class="headline" v-text="card.current.title" style="font-weight: bold"></v-card-title>         
            <v-img
              :src="card.img_src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
              height="200px"
            >
            </v-img>
            <v-card-subtitle v-text="card.current.desc" style="font-weight: 600;"></v-card-subtitle>

          </v-card>
        </v-col>
      </v-row>
      <v-row style="margin-top: 80px">
      </v-row>
  </v-card>
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
        this.allLocations = localizeLocations(allLocs)
    }
}
</script>