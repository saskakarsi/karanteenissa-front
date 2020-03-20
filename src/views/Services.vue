<template>
    <v-container fluid>
      <v-row>
      <v-col cols="6">
        <v-select
          v-model="selectedLocation"
          :items="locs.locations"
          menu-props="auto"
          label="Location"
          hide-details
          single-line
        ></v-select>
      </v-col>
      <v-col cols="6">
        <v-select
          v-model="selectedType"
          :items="serviceTypes"
          menu-props="auto"
          label="Type"
          hide-details
          single-line
        ></v-select>
      </v-col>
      </v-row>
      <v-row dense>
        <v-col
          sm="6"
          md="4"
          v-for="card in svcs"
          :key="card.title"
          :cols="12"
        >
          <v-card
            :href="card.link"
            target="_blank"
          >
            <v-img
              :src="card.img_src"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="200px"
            >
              <v-card-title v-text="card.title"></v-card-title>
            </v-img>

            <v-card-text class="text--primary" v-text="card.desc"></v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <div v-html="locale"></div>
    </v-container>
</template>

<script>
const services = require('../fixtures/services')
const locations = require('../fixtures/locations')
const { getters, mutators } = require('../util/state')
const { localizeServices, localizeLocations } = require('../util/localize')


export default {
    data: () => ({
      selectedLocation: undefined,
      selectedType: undefined
    }),
    computed: {
      locale: getters.locale,
      svcs: function () {
        const svcs = localizeServices(services)
        if (!this.selectedLocation) return svcs
        return svcs.filter((svc) => {
          const locFilter = svc.locations.includes(this.selectedLocation) 
                        || svc.locations.includes('National')
                        || !this.selectedLocation
                        || this.selectedLocation == 'Kaikki'
          const typeFilter = svc.type == this.selectedType
                        || !this.selectedType

          return locFilter && typeFilter
        })
      },
      logQuery: function () {
        return this.$route.query
      },
      locs: function () {
        return { 
          locations: localizeLocations(locations).map((loc) => loc.current),
          default: 'All'
        }
      },
      serviceTypes: function () {
        return Array.from(new Set(services.map((svc) => svc.type)))
      }
    },
    methods: {
      setLocale: mutators.setLocale
    }
}
</script>