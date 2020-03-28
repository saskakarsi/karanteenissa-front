<template>
  <v-container fluid class="ma-0 pa-0">
   <v-parallax
    dark
    src="img/forest.jpg"
    margin-left="auto"
    margin-rigth="auto"
  >
    <v-card
        max-width="1200px"
        elevation="0"
        class="mx-auto py-6 px-6"
        style="margin-bottom: 40px margin-top: 40px"
        color="rgb(255, 0, 0, 0.0)"
        dark>

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
          solo
          light
        ></v-select>
      </v-col>
      <v-col cols="12 mx-auto">
        <v-select
          v-model="selectedCategory"
          :items="cats"
          menu-props="auto"
          :label="menuTexts.services.categorySelector"
          hide-details
          single-line
          clearable
          solo
          light
        ></v-select>
      </v-col>
      <v-col class="mx-auto">
        <div class="text-center">
            <v-btn large rounded light color="primary" to="/services">{{ menuTexts.home.searchButton }}</v-btn>
        </div>
        </v-col>
    </v-card>
  </v-parallax> 
      <v-card
        max-width="1100px"
        elevation="0"
        class="mx-auto py-6 px-6"
        style="margin-bottom: 40px">     
        <v-col class="mx-auto text-center">
            <h1 class="headline">{{ menuTexts.app.frontTitle1 }}</h1>
        </v-col>

        <v-col class="mx-auto text-center" style="margin-bottom: 40px">
            <h1 class="headline">{{ menuTexts.app.frontTitle2 }}</h1>
        </v-col>

        <v-divider max-width="500px"></v-divider> 

        <v-col class="mx-auto">
        <v-card class=" mx-auto" elevation="0" style="margin-top: 40px">        
      <v-row dense>
        <v-col>
            <v-card
              class="mx-auto"
              width="235px"
              height="235px"
              elevation="0"
              to="/Mentalhealth"
            >
              <v-img
                :src="menuTexts.home.mentalHealthButton"
                height="235px"
                width="235px"
                class="mx-auto"
              >
              </v-img>
            </v-card>
        </v-col>
        <v-col>
            <v-card
              class="mx-auto"
              width="235px"
              height="235px"
              elevation="0"
              to='/tips'
            >
              <v-img
                :src="menuTexts.home.tipsButton"
                height="235px"
                width="235px"
                class="mx-auto"
              >
              </v-img>
            </v-card>
          </v-col>
          <v-col>
            <v-card
              class="mx-auto"
              width="235px"
              height="235px"
              elevation="0"
              href="https://www.facebook.com/groups/karanteenissa/"
            >
              <v-img
                :src="menuTexts.home.conversationButton"
                height="235px"
                width="235px"
                class="mx-auto"
              >
              </v-img>
            </v-card>
          </v-col>
            <v-col>
            <v-card
              class="mx-auto"
              width="235px"
              height="235px"
              elevation="0"
              href="https://docs.google.com/forms/d/e/1FAIpQLScJs29BmU7OkDLyG0UU6UbPN65OUVy0Hdc5LmmBgQhXxHO0QQ/viewform?usp=sf_link"
            >
              <v-img
                :src="menuTexts.home.tellUsButton"
                height="235px"
                width="235px"
                class="mx-auto"
              >
              </v-img>
            </v-card>
        </v-col>
      </v-row>
      </v-card>
        <v-card class=" mx-auto" elevation="0" style="margin-top: 40px">       
      <v-divider></v-divider>
                <v-col class="mx-auto text-center" style="margin-top: 3em">
            <h1 class="headline">
              {{ menuTexts.home.kauppaApuText }}
              <a href="https://kauppa-apu.sharetribe.com/">kauppa-apu.com</a>.
            </h1>
            <br>                
        </v-col>
        </v-card>      
    </v-col>
  </v-card>
</v-container>  
</template>

<script>
const services = require('../fixtures/services')
const locations = require('../fixtures/locations')
const categories = require('../fixtures/categories')
const { menuLocalizations } = require('../fixtures/locales')
const { getters, computeds } = require('../util/state')
const { getServices } = require('../util/services')
const { localizeLocations } = require('../util/localize')
const { localizeCategories } = require('../util/localize')


export default {
    data: () => ({
      allLocations: undefined,
      allCategories: undefined
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
      cats: function () {
        return localizeCategories(this.allCategories).map((cat) => cat.current)
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
        var svcCats = []
        for (const svc of services) {
          svcCats = Array.from(new Set(svcCats.concat(svc.categories)))
        }
        const allLocs = svcLocs.map((loc) => {
          const existingLoc = locations.find(l => l.name.fi == loc || l.name.gb == loc)
          if (existingLoc) return existingLoc
          return { name: { fi: loc }} // Localization want this format
        })
        this.allLocations = allLocs
        const allCats = svcCats.map((cat) => {
          const existingCat = categories.find(c => c.name.fi == cat || c.name.gb == cat)
          if (existingCat) return existingCat
          return { name: { fi: cat }} // Localization want this format
        })
        this.allCategories = allCats
    }
}
</script>