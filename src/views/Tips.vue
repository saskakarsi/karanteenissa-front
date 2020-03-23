<template>
    <v-container fluid class="ma-0 pa-0">
      <v-card
        max-width="1200px"
        elevation="0"
        class="mx-auto py-6 px-6"
        style="margin-bottom: 40px">
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
        <v-divider></v-divider>
        <br>
        <br>
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