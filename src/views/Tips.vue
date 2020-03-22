<template>
    <div>
      <v-col class="mx-auto text-center" style="max-width: 80%">
         <div class="content">
          <h1>{{ menuTexts.tips.title1 }}</h1>
          <br>
          <h3 class="info-text">{{ menuTexts.tips.point1 }}</h3>
          <p class="info-text">{{ menuTexts.tips.point2 }}</p>
          <a class="info-text-link" href="https://www.businessfinland.fi/suomalaisille-asiakkaille/palvelut/rahoitus/hairiotilannerahoitus/">{{ menuTexts.tips.read }} </a><br><br><br>
          <p class="info-text">{{ menuTexts.tips.point3 }}</p>
          <a class="info-text-link" href="https://www.finnvera.fi">{{ menuTexts.tips.read }} </a> <br><br><br>
          <p class="info-text">{{ menuTexts.tips.point4 }}</p>
          <p class="info-text">{{ menuTexts.tips.point5 }}</p>
          <a class="info-text-link" href="https://www.te-palvelut.fi">{{ menuTexts.tips.read }} </a> <br><br><br>
          <p class="info-text">{{ menuTexts.tips.point6 }}</p>
          <a class="info-text-link" href="https://www.suomi.fi/palvelut/talous-ja-velkaneuvonta-yrityksille-ja-yrittajille-elinkeino-liikenne-ja-ymparistokeskus/8df3bbb0-5426-4b06-9926-dea400ee4fa7">{{ menuTexts.tips.read }} </a> <br><br><br>
        </div>
        </v-col>

        <v-col class="mx-auto text-center" style="max-width: 80%">
            <h1>{{ menuTexts.tips.title2 }}</h1>
          <br>
          <h3 class="info-text">{{ menuTexts.tips.point11 }}</h3><br><br>
          <p class="info-text">{{ menuTexts.tips.point12 }}</p>
          <p class="info-text">{{ menuTexts.tips.point13 }}</p>
           <br> <h3 class="info-text">{{ menuTexts.tips.point14 }}</h3><br>
          <p class="info-text">{{ menuTexts.tips.point15 }}</p>
          <a class="info-text-link" href="https://www.te-palvelut.fi">{{ menuTexts.tips.read }} </a><br><br><br>
          <p class="info-text">{{ menuTexts.tips.point16 }}</p>
          <a class="info-text-link" href="https://www.kela.fi/tyottoman-pikaopas">{{ menuTexts.tips.read }}</a><br><br><br><br>
        </v-col>
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