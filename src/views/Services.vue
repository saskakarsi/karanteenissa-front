<template>
    <v-container fluid>
      <v-row>
      <v-col cols="12">
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
      <v-col cols="12">
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
      <v-row>
      <v-col>
      <v-footer
        absolute
        class="font-weight-medium"
        >
        <v-col
            class="text-center"
            cols="12"
        >
            {{ new Date().getFullYear() }} — <strong>Karanteenissa.fi</strong>
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
const { getters } = require('../util/state')
const { localizeServices, localizeLocations, findLocation } = require('../util/localize')


export default {
    data: () => ({
      selectedLocation: undefined,
      selectedCategory: undefined,
      allLocations: undefined
    }),
    computed: {
      menuTexts: function () {
        return menuLocalizations[getters.locale().value].services
      },
      svcs: function () {
        const svcs = localizeServices(services)
        const locDoc = findLocation(this.allLocations, this.selectedLocation)
        return svcs.filter((svc) => {
          const locFilter = !locDoc
                        || svc.locations.includes(locDoc.name.fi) 
                        || svc.locations.includes('National')
          const categoryFilter = svc.category == this.selectedCategory
                        || !this.selectedCategory

          return locFilter && categoryFilter
        })
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