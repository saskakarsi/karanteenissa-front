<template>
    <div>
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
            <a style="margin: 5px" href="https://github.com/saskakarsi/karanteenissa-front"><i id="social-gh"
                class="fa fa-github-square fa-3x"></i></a>
          </div>
          <strong>Karanteenissa.fi</strong> - {{ new Date().getFullYear() }}
        </div>
        <i class="subtitle-1">{{ menuTexts.contact.translate }}</i>
      </section>
        </v-col>
        </v-footer>
    </v-col>
    </div>
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