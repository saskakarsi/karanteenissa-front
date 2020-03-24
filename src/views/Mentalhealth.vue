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
        max-width="1100px"
        elevation="3"
        class="mx-auto"
        style="margin: 7em"
        height="100%"
    >
        <v-card
            max-width="1100px"
            elevation="0"
            class="mx-auto ma-6 pa-6"
            style="margin-bottom: 40px"
            >
                                <v-img
                        src="img/mielenterveys-lg.png"
                        class="white--text align-end mx-auto"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                        height="205px"
                        width="416px"
                    >
                    </v-img>
            <v-col class="mx-auto text-center" style="margin-top: 2em">
                <h1 class="headline">Koronatilanne voi ahdistaa ja tehdä olon epämukavaksi. Alla on lueteltu palveluita, joista saa apua sekä akuutteihin että pitkäaikaisiin mielenterveyden ongelmiin. Kaikki listatut palvelut ovat maksuttomia. </h1>
            </v-col>
            <v-card class=" mx-auto" elevation="0" style="margin: 3em">       
                <v-divider></v-divider>
            </v-card>
        <v-card
            max-width="1100px"
            elevation="0"
            class="mx-auto">
            <v-row>
            <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    max-width="300px"
                    height="420px"
                    class="mx-auto d-flex flex-column"
                >
                    <v-card-title class="headline" style="font-weight: bold">Kriisipuhelin</v-card-title>         
                    <v-img
                        src="img/mieli.png"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Kriisipuhelin palvelee 24 tuntia vuorokaudessa seitsemänä päivänä viikossa. Puhelimessa päivystää mielenterveyden ammattilaisia ja sinne voi soittaa akuuteissa kriisitilanteissa. </v-card-subtitle>
                    <v-card-text class="font-weight-black" style="font-size: 20px">Soita: 09 2525 011 </v-card-text>
                </v-card>
            </v-col>                
            <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    max-width="300px"
                    height="420px"
                    class="mx-auto d-flex flex-column"
                >
                    <v-card-title class="headline" style="font-weight: bold">Sekaisin Chat</v-card-title>         
                    <v-img
                        src="img/mieli.png"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Sekasin-chat on 12-29 -vuotiaille nuorille ma-pe 9-24, la-su 15-24. Vastaajina toimii vapaaehtoisia ja ammattilaisia lukuisista eri järjestöistä. </v-card-subtitle>
                    <v-card-actions style="margin: 0.5em"><v-btn rounded light color="primary" href="https://tukinet.net/teemat/sekasin/ ">Siirry chättiin</v-btn></v-card-actions>
                </v-card>
            </v-col>
                        <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    width="300px"
                    height="420px"
                    class="mx-auto d-flex flex-column"
                >
                    <v-card-title class="headline" style="font-weight: bold">Tukinet</v-card-title>         
                    <v-img
                        src="img/mieli.png"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Tältä sivulta löydät Solmussa-chatin, joka palvelee arkisin klo 15-19. Sivustolla voit myös luoda pidemmän tukisuhteen, jos tilanteesi sellaista vaatii. </v-card-subtitle>
                    <v-card-actions style="margin: 0.5em"><v-btn rounded light color="primary" href="https://mieli.fi/fi/tukea-ja-apua/verkossa/tukinet-tukipisteesi-netiss%C3%A4">Siirry chättiin</v-btn></v-card-actions>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    max-width="300px"
                    height="420px"
                    class="mx-auto d-flex flex-column"
                >
                    <v-card-title class="headline" style="font-weight: bold">Selma oma-apuohjelma</v-card-title>         
                    <v-img
                        src="img/mieli.png"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Materiaalia äkillisen kriisitilanteen omatoimiseen käsittelyyn. Palvelussa on kahdeksan yksittäistä istuntoa, joiden avulla voi käsitellä kriisitilannetta.  </v-card-subtitle>
                    <v-card-actions right style="margin: 0.5em"><v-btn rounded light color="primary" href="https://mieli.fi/fi/tukea-ja-apua/verkossa/selma-oma-apuohjelma">Tutustu</v-btn></v-card-actions>
                </v-card>
            </v-col>
                        <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    max-width="300px"
                    height="420px"
                    class="mx-auto d-flex flex-column"
                >
                    <v-card-title class="headline" style="font-weight: bold">Kriisikeskusverkosto</v-card-title>         
                    <v-img
                        src="img/mieli.png"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Sivulta löydät lähimmän kriisikeskuksen, johon voit ottaa yhteyttä, jos sinä tai läheisesi tarvitsee tukea ja apua.</v-card-subtitle>
                    <v-card-actions style="margin: 0.5em"><v-btn rounded light color="primary" href="https://mieli.fi/fi/tukea-ja-apua/kasvokkain/kriisikeskusverkosto ">Tutustu</v-btn></v-card-actions>
                </v-card>
            </v-col>
                        <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    max-width="300px"
                    height="420px"
                    class="mx-auto d-flex flex-column"
                >
                    <v-card-title class="headline" style="font-weight: bold">Mielenterveystalo.fi</v-card-title>         
                    <v-img
                        src="img/mielenterveystalo.png"
                        class="white--text align-end"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Mielenterveystalo.fi on terveys- ja sosiaalialan ammattilaisten kehittämä valtakunnallinen nettipalvelu. Palvelua voi käyttää kuka tahansa ja apua voi löytää niin itselle kuin läheisilleenkin </v-card-subtitle>
                    <v-card-actions style="margin: 0.5em"><v-btn rounded light color="primary" href="https://www.mielenterveystalo.fi/aikuiset/pages/default.aspx ">Tutustu</v-btn></v-card-actions>
                </v-card>
            </v-col>
            </v-row>
            </v-card>
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
            <v-img
                src="img/mielenterveys-lg.png"
                class="white--text align-end mx-auto"
                gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                height="137px"
                width="277px"
            >
                </v-img>
            <v-col class="mx-auto text-center" style="margin-top: 1em">
                <h1 class="headline">Koronatilanne voi ahdistaa ja tehdä olon epämukavaksi. Alla on lueteltu palveluita, joista saa apua sekä akuutteihin että pitkäaikaisiin mielenterveyden ongelmiin. Kaikki listatut palvelut ovat maksuttomia. </h1>
            </v-col>
            <v-card class=" mx-auto" elevation="0" style="margin: 3em">       
                <v-divider></v-divider>
            </v-card>
            <v-card
                max-width="900px"
                elevation="0"
                class="mx-auto ma-0 pa-3"
                style="margin-bottom: 40px"
                >
                <v-card
                max-width="600px"
                elevation="0"
                class="mx-auto"
                style="margin: 0em"
                >
            <v-row>
            <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    max-width="300px"
                    class="mx-auto d-flex flex-column"
                >
                    <v-card-title class="headline" style="font-weight: bold">Kriisipuhelin</v-card-title>         
                    <v-img
                        src="img/mieli.png"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Kriisipuhelin palvelee 24 tuntia vuorokaudessa seitsemänä päivänä viikossa. Puhelimessa päivystää mielenterveyden ammattilaisia ja sinne voi soittaa akuuteissa kriisitilanteissa. </v-card-subtitle>
                    <v-card-text class="font-weight-black" style="font-size: 20px">Soita: 09 2525 011 </v-card-text>
                </v-card>
            </v-col>                
            <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    max-width="300px"
                    class="mx-auto d-flex flex-column"
                >
                    <v-card-title class="headline" style="font-weight: bold">Sekaisin Chat</v-card-title>         
                    <v-img
                        src="img/mieli.png"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Sekasin-chat on 12-29 -vuotiaille nuorille ma-pe 9-24, la-su 15-24. Vastaajina toimii vapaaehtoisia ja ammattilaisia lukuisista eri järjestöistä. </v-card-subtitle>
                    <v-card-actions style="margin: 0.5em"><v-col class="text-right"><v-btn rounded light color="primary" href="https://tukinet.net/teemat/sekasin/ ">Siirry chättiin</v-btn></v-col></v-card-actions>
                </v-card>
            </v-col>
                        <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    width="300px"
                    class="mx-auto d-flex flex-column"
                >
                    <v-card-title class="headline" style="font-weight: bold">Tukinet</v-card-title>         
                    <v-img
                        src="img/mieli.png"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Tältä sivulta löydät Solmussa-chatin, joka palvelee arkisin klo 15-19. Sivustolla voit myös luoda pidemmän tukisuhteen, jos tilanteesi sellaista vaatii. </v-card-subtitle>
                    <v-card-actions style="margin: 0.5em"><v-col class="text-right"><v-btn rounded light color="primary" href="https://mieli.fi/fi/tukea-ja-apua/verkossa/tukinet-tukipisteesi-netiss%C3%A4">Siirry chättiin</v-btn></v-col></v-card-actions>
                </v-card>
            </v-col>
            <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    max-width="300px"
                    class="mx-auto d-flex flex-column"
                >
                    <v-card-title class="headline" style="font-weight: bold">Selma oma-apuohjelma</v-card-title>         
                    <v-img
                        src="img/mieli.png"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Materiaalia äkillisen kriisitilanteen omatoimiseen käsittelyyn. Palvelussa on kahdeksan yksittäistä istuntoa, joiden avulla voi käsitellä kriisitilannetta.  </v-card-subtitle>
                    <v-card-actions right style="margin: 0.5em"><v-col class="text-right"><v-btn rounded light color="primary" href="https://mieli.fi/fi/tukea-ja-apua/verkossa/selma-oma-apuohjelma">Tutustu</v-btn></v-col></v-card-actions>
                </v-card>
            </v-col>
                        <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    max-width="300px"
                    class="mx-auto d-flex flex-column"
                >
                    <v-card-title class="headline" style="font-weight: bold">Kriisikeskusverkosto</v-card-title>         
                    <v-img
                        src="img/mieli.png"
                        class="white--text align-end"
                        gradient="to bottom, rgba(0,0,0,0), rgba(0,0,0,0)"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Sivulta löydät lähimmän kriisikeskuksen, johon voit ottaa yhteyttä, jos sinä tai läheisesi tarvitsee tukea ja apua.</v-card-subtitle>
                    <v-card-actions style="margin: 0.5em"><v-col class="text-right"><v-btn rounded light color="primary" href="https://mieli.fi/fi/tukea-ja-apua/kasvokkain/kriisikeskusverkosto ">Tutustu</v-btn></v-col></v-card-actions>
                </v-card>
            </v-col>
                        <v-col>
                <v-card
                    elevation=2
                    hover:style="color: white"
                    hover
                    target="_blank"
                    max-width="300px"
                    class="mx-auto"
                >
                    <v-card-title class="headline" style="font-weight: bold">Mielenterveystalo.fi</v-card-title>         
                    <v-img
                        src="img/mielenterveystalo.png"
                        class="white--text align-end"
                        height="150px"
                    >
                    </v-img>
                    <v-card-subtitle style="font-weight: 600;">Mielenterveystalo.fi on terveys- ja sosiaalialan ammattilaisten kehittämä valtakunnallinen nettipalvelu. Palvelua voi käyttää kuka tahansa ja apua voi löytää niin itselle kuin läheisilleenkin </v-card-subtitle>
                    <v-card-actions style="margin: 0.0em"><v-col class="text-right"><v-btn rounded light color="primary" href="https://www.mielenterveystalo.fi/aikuiset/pages/default.aspx ">Tutustu</v-btn></v-col></v-card-actions>
                </v-card>
            </v-col>
            </v-row>    
            </v-card>
            </v-card>
            </v-card>
    </v-container>
</template>

<script>
const { menuLocalizations } = require('../fixtures/locales')
const { getters } = require('../util/state')

export default {
    data: () => ({}),
    computed: {
      menuTexts: function () {
        return menuLocalizations[getters.locale().value]
      }
      },
  methods: {
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