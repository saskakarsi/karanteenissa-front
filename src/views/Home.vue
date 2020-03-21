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

        <v-col cols="12 mx-auto">
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
      <v-col cols="12 mx-auto">
        <v-select
          v-model="selectedCategory"
          :items="serviceCategories"
          menu-props="auto"
          :label="menuTexts.categorySelector"
          hide-details
          single-line
          clearable
        ></v-select>
      </v-col>


      <v-col class="mx-auto">
        <div class="text-center">
            <v-btn rounded color="primary" href="#" dark>HAE</v-btn>
        </div>
        </v-col>

        <v-col class="mx-auto text-center" style="margin-top: 5em">
            <h1 class="headline"> </h1>
                    <v-divider></v-divider>    
        </v-col>

        <v-col class="mx-auto text-center">
            <h1 class="headline">Karanteenissa.fi kokoaa tietoa erilaisista tuote- ja palveluratkaisuista koronaviruksen vaikutusten ehkäisemiseksi.</h1>
        </v-col>

        <v-col class="mx-auto text-center">
            <h1 class="headline">Pidetään toisistamme huolta.</h1>
        </v-col>

        <v-col class="mx-auto">
        <div class="text-center">
            <v-btn rounded color="primary" style="margin: 10px" href="https://docs.google.com/forms/d/e/1FAIpQLScJs29BmU7OkDLyG0UU6UbPN65OUVy0Hdc5LmmBgQhXxHO0QQ/viewform?usp=sf_link" dark>Kerro meille palvelusta</v-btn>

            <v-btn rounded color="primary" style="margin: 10px" href="https://www.karanteenissa.fi/vinkit.html" dark>Vinkit</v-btn>

            <v-btn rounded color="primary" style="margin: 10px" href="https://www.facebook.com/groups/karanteenissa/" dark>Keskustele FB-ryhmässä</v-btn>
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
                        || svc.locations.includes('Koko Suomi')
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