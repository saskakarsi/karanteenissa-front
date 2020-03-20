<template>
    <v-container fluid>
      <v-row>
      <v-col cols="6">
        <v-subheader>Location</v-subheader>
        <v-select
          v-model="selectedLocation"
          :items="locs.locations"
          menu-props="auto"
          label="Select"
          hide-details
          single-line
        ></v-select>
      </v-col>
      </v-row>
      <v-row dense>
        <v-col
          v-for="card in svcs"
          :key="card.title"
          :cols="6"
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
      <div v-html="logQuery"></div>
      <div v-html="locale"></div>
    </v-container>
</template>

<script>
const services = require('../fixtures/services')
const locations = require('../fixtures/locations')
const { getters, mutators } = require('../util/state')
const { localize_services, localize_locations } = require('../util/localize')

export default {
    data: () => ({
      selectedLocation: undefined
    }),
    computed: {
      locale: getters.locale,
      svcs: function () {
        const svcs = localize_services(services)
        if (!this.selectedLocation) return svcs
        return svcs.filter((svc) => {
          return svc.locations.includes(loc.fi) || svc.locations.includes('National')
        })
      },
      logQuery: function () {
        return this.$route.query
      },
      locs: function () {
        return { 
          locations: localize_locations(locations),
          default: 'All'
        }
      }
    },
    methods: {
      setLocale: mutators.setLocale
    }
}
</script>