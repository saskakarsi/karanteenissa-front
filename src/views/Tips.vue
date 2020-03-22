<template>
    <div>
      <v-col class="mx-auto text-center" style="max-width: 80%">
         <div class="content">
          <h1>Yrittäjille</h1>
          <br>
          <h3 class="info-text">Hallitus linjasi 20.3.2020 pitämässään tiedotustilaisuudessaan lukuisista yrityksille suunnatuista koronakriisin lievitystoimista. </h3>
          <p class="info-text">Business Finlandin rahoitusta lisättiin 150 miljoonalla eurolla. Business Finlandilta voi nyt hakea liiketoiminnan kehitysrahoitusta häiriötilanteissa. Rahoitus on suunnattu Suomessa toimiville pk- ja midcap-yrityksille, joiden liiketoiminta kärsii koronavirustilanteesta. Rahoitusta voi saada enintään 100 000 euroa, josta 70% voi saada etukäteisrahoituksena heti projektin alkuun.</p>
          <a class="info-text-link" href="https://www.businessfinland.fi/suomalaisille-asiakkaille/palvelut/rahoitus/hairiotilannerahoitus/">Lue lisää </a><br><br><br>
          <p class="info-text">Hallitus päätti kasvattaa Finnveran valtuuksia 2 miljardista eurosta 12 miljardiin euroon. Finnveralta voi saada takauksen pankkilainoihin (takaus maksimissaan 80% lainan määrästä). Pankkilainaa haetaan pääsääntöisesti omasta pankista. </p>
          <a class="info-text-link" href="https://www.finnvera.fi">Lue lisää </a> <br><br><br>
          <p class="info-text">Yritykset saavat kevennyksiä myös työeläkemaksuihin. Työeläkemaksujen eräpäiviä tullaan lykkäämään 3 kuukaudella (effective immediately), minkä lisäksi TyEL-maksuihin tulee myös 2,6%:n alennus (alkaen viimeistään 1.6.2020). Yritykset voivat myös hakea eläkeyhtiöltä eläkemaksujen takaisinlainausta, joihin Finnvera lupaa 80%:n takauksia. Olkaa yhteydessä omaan eläkerahoitusyhtiöönne.</p>
          <p class="info-text">Yrittäjät saavat myös väliaikaisesti oikeuden työttömyyspäivärahaan. Tämä koskee myös itsensä työllistäjiä ja freelancer-yrittäjiä. Yrittäjien tulee perustella, miten koronaviruskriisi on heikentänyt yritystoimintaa. Tulot otetaan huomioon soviteltua työttömyysturvaa varten. Työttömyyspäivärahaa voi hakea TE-toimiston sivuilta. </p>
          <a class="info-text-link" href="https://www.te-palvelut.fi">Lue lisää </a> <br><br><br>
          <p class="info-text">Yritys-Suomi Talousapu neuvontapalvelu auttaa, neuvoo ja ohjaa talous- ja maksuvaikeuksissa olevia pk-yrityksiä ja yrittäjiä ja sen tavoitteena on ehkäistä turhia konkursseja tarjoamalla alhaisen yhteydenottokynnyksen maksutonta talousneuvontaa puhelimitse. </p>
          <a class="info-text-link" href="https://www.suomi.fi/palvelut/talous-ja-velkaneuvonta-yrityksille-ja-yrittajille-elinkeino-liikenne-ja-ymparistokeskus/8df3bbb0-5426-4b06-9926-dea400ee4fa7">Lue lisää </a> <br><br><br>
        </div>
        </v-col>

        <v-col class="mx-auto text-center" style="max-width: 80%">
            <h1>Lomautetuille työntekijöille</h1>
          <br>
          <h3 class="info-text">Hallitus tiedotti 20.3.2020 pitämässään tiedotustilaisuudessa myös muutamista lomautettujen työntekijöiden taloudellista asemaa helpottavista toimista.</h3><br><br>
          <p class="info-text">Työttömyysturvan tasoa parannetaan väliaikaisesti poistamalla työttömyyden alun viisi omavastuupäivää, joilta etuutta ei normaalisti makseta.</p>
          <p class="info-text">Työttömyysturvan työssäoloehtoa lyhennetään väliaikaisesti 13 viikkoon nykyisestä noin puolesta vuodesta. Muutos koskee kaikkia työsuhteita, jotka ovat alkaneet 1.1.2020 jälkeen.</p>
           <br> <h3 class="info-text">Jos joudut lomautetuksi:</h3><br>
          <p class="info-text">Ilmoittaudu työttömäksi työnhakijaksi TE-palveluiden asiointipalvelussa tai paikallisessa TE-toimistossasi. </p>
          <a class="info-text-link" href="https://www.te-palvelut.fi">Lue lisää </a><br><br><br>
          <p class="info-text">Kela tarjoaa hyvän pikaoppaan työttömyysturvan hakemiseen. </p>
          <a class="info-text-link" href="https://www.kela.fi/tyottoman-pikaopas">Lue lisää </a><br><br><br><br>
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
export default {
    data: () => ({})
}
</script>