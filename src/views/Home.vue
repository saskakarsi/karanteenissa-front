<template>
    <v-container fluid>
      <v-card
        max-width="1200px"
        elevation="0"
        class="mx-auto py-6 px-6"
        style="margin-bottom: 40px">

        <v-col class="mx-auto text-center">
            <h1 class="display-1">Löydä apua karanteenissa</h1>
        </v-col>
        <v-col class="mx-auto text-center">
            <h1 class="headline">Karanteenissa.fi kokoaa tietoa erilaisista tuote- ja palveluratkaisuista koronaviruksen vaikutusten ehkäisemiseksi.</h1>
        </v-col>

        <v-col class="mx-auto text-center">
            <h1 class="headline">Pidetään toisistamme huolta.</h1>
        </v-col>
        <v-col class="mx-auto text-center">
            <h1 class="headline"> </h1>
        </v-col>
        <v-col class="mx-auto text-center">
            <h1 class="headline"> </h1>
        </v-col>

        <v-col class="mx-auto text-center">
            <h1 class="headline"> </h1>
                    <v-divider></v-divider>    
        </v-col>



        

        <v-col style="background: url('')">
        <v-col class="mx-auto text-center">
            <h1 class="headline">Hae palveluita lähellä sinua</h1>
        </v-col> 

   

      <v-col cols="4" class="mx-auto">
        <v-select
          v-model="selectedLocation"
          :items="locs"
          menu-props="auto"
          :label="menuTexts.locationSelector"
          hide-details
          single-line
          clearable
        ></v-select>
      </v-col>


      <v-col cols="4" class="mx-auto">
        <v-select
          v-model="selectedType"
          :items="serviceTypes"
          menu-props="auto"
          :label="menuTexts.typeSelector"
          hide-details
          single-line
          clearable
        ></v-select>
      </v-col>


      <v-col class="mx-auto">
        <div class="text-center">
            <v-btn rounded color="primary" dark>HAE</v-btn>
        </div>
        </v-col>

        <v-col class="mx-auto text-center">
            <h1 class="headline"> </h1>
                    <v-divider></v-divider>    
        </v-col>


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
            {{ new Date().getFullYear() }} — <strong>Karanteenissa.fi</strong>
        </v-col>
        </v-footer>
    </v-col>
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
      selectedType: undefined
    }),
    computed: {
      menuTexts: function () {
        return menuLocalizations[getters.locale().value].services
      },
      svcs: function () {
        const svcs = localizeServices(services)
        if (!this.selectedLocation) return svcs
        const locDoc = findLocation(locations, this.selectedLocation)
        console.log(locDoc)
        return svcs.filter((svc) => {
          const locFilter = svc.locations.includes(locDoc.name.fi) 
                        || svc.locations.includes('National')
                        || !locDoc
          const typeFilter = svc.type == this.selectedType
                        || !this.selectedType

          return locFilter && typeFilter
        })
      },
      logQuery: function () {
        return this.$route.query
      },
      locs: function () {
        return localizeLocations(locations).map((loc) => loc.current)
      },
      serviceTypes: function () {
        return Array.from(new Set(services.map((svc) => svc.type)))
      }
    },
}
</script>