<template>
    <v-container>
        <v-card
            max-width="600px"
            elevation="0"
            class="mx-auto py-6 px-6"
            style="margin-bottom: 40px">

        <v-col class="mx-auto text-center">
            <h1 class="headline">{{ menuTexts.contact.description }}</h1>
        </v-col>
        <v-col class="mx-auto text-center">
            <h1 class="title"><a href="mailto:karanteenissa2020@gmail.com">karanteenissa2020@gmail.com</a></h1>
        </v-col>
        <v-col class="mx-auto text-center">
            <h1 class="subtitle-1">{{ menuTexts.contact.monetary }}</h1>
        </v-col>
        <v-col class="mx-auto text-center">
            <h1 class="subtitle-1">{{ menuTexts.contact.translate }}</h1>
        </v-col>
        </v-card>

    </v-container>
</template>

<script>
const { menuLocalizations } = require('../fixtures/locales')
const { getters, computeds } = require('../util/state')

export default {
    data: () => ({}),
    computed: {
      ...computeds,
      menuTexts: function () {
        return menuLocalizations[getters.locale().value]
      }
    }
}
</script>