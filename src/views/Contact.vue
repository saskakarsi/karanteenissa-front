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
        max-width="900px"
        elevation="3"
        class="mx-auto"
        style="margin: 7em"
        height="100%"
    >
        <v-card
            max-width="900px"
            elevation="0"
            class="mx-auto ma-6 pa-6"
            style="margin-bottom: 40px"
            >
            <v-col class="mx-auto text-center">
                <h1 class="headline">{{ menuTexts.contact.description }}</h1>
            </v-col>
            <v-card class=" mx-auto" elevation="0" style="margin: 3em">       
                <v-divider></v-divider>
            </v-card>
        <v-card
            max-width="600px"
            elevation="0"
            class="mx-auto">
            <v-row dense>
            <v-col>
                <v-card
                class="mx-auto"
                width="235px"
                height="235px"
                elevation="0"
                href="https://forms.gle/TJbC8acZ3RbPCeyS6"
                >
                <v-img
                    :src="menuTexts.contact.registerButton"
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
                href="https://forms.gle/k6aaVM9nmPPAU36h6"
                >
                <v-img
                    :src="menuTexts.contact.feedbackButton"
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
            </v-card>
            <v-col class="mx-auto text-center" style="margin-top: 3em">
                <h1 class="title"><a href="mailto:karanteenissa2020@gmail.com">karanteenissa2020@gmail.com</a></h1>
            </v-col>
            <v-col class="mx-auto text-center">
                <h1 class="subtitle-1">{{ menuTexts.contact.monetary }}</h1>
            </v-col>
            <v-col class="mx-auto text-center">
                <h1 class="subtitle-1">{{ menuTexts.contact.translate }}</h1>
            </v-col>
        </v-card>
    </v-card>
           </v-parallax>
<!-- ELSE -->
        <v-card
            max-width="900px"
            elevation="0"
            class="mx-auto"
            style="margin: 0em"
            height="100%"
            v-else
            >
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
                            class="mx-auto"
                            width="235px"
                            height="235px"
                            elevation="0"
                            href="https://forms.gle/TJbC8acZ3RbPCeyS6"
                            style="margin: 1.3em"
                            >
                                <v-img
                                    :src="menuTexts.contact.registerButton"
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
                            href="https://forms.gle/k6aaVM9nmPPAU36h6"
                            style="margin: 1.3em"
                            >
                                <v-img
                                    :src="menuTexts.contact.feedbackButton"
                                    height="235px"
                                    width="235px"
                                    class="mx-auto"
                                >
                                </v-img>
                            </v-card>
                        </v-col>
                    </v-row>     
                </v-card>
                    <v-card class=" mx-auto" elevation="0" style="margin: 1em">       
                        <v-divider></v-divider>
                    </v-card>
                    <v-col class="mx-auto text-center">
                        <h1 class="headline">{{ menuTexts.contact.description }}</h1>
                    </v-col>
                    <v-card class=" mx-auto" elevation="0" style="margin: 1em">       
                        <v-divider></v-divider>
                    </v-card>
                <v-col class="mx-auto text-center" style="margin: 1em">
                    <h1 class="title"><a href="mailto:karanteenissa2020@gmail.com">karanteenissa2020@gmail.com</a></h1>
                </v-col>
                <v-col class="mx-auto text-center">
                    <h1 class="subtitle-1">{{ menuTexts.contact.monetary }}</h1>
                </v-col>
                <v-col class="mx-auto text-center">
                    <h1 class="subtitle-1">{{ menuTexts.contact.translate }}</h1>
                </v-col>
            </v-card>
        </v-card>
    </v-container>
</template>

<script>
const { menuLocalizations } = require('../fixtures/locales')
const { getters, computeds , mutators} = require('../util/state')

export default {
    data: () => ({}),
    computed: {
      ...computeds,
      menuTexts: function () {
        return menuLocalizations[getters.locale().value]
      }
      },
  methods: {
    ...mutators,
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