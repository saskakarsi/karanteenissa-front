<template>
    <div>
      <v-col class="mx-auto text-center">
            <h1 class="headline">Karanteenissa.fi viiden opiskelijan tapa auttaa koronaviruksen aiheuttaman epävarmuuden
            aikana.</h1>
        </v-col>

        <v-col class="mx-auto text-center">
            <h1 class="headline"><a href="mailto:karanteenissa2020@gmail.com">karanteenissa2020@gmail.com</a></h1>
        </v-col>

        <v-col class="mx-auto text-center">
            <h1 class="headline">Sivuston ylläpitäjät eivät ansaitse rahaa sivustolla olevista linkeistä.</h1>
        </v-col>

        <v-col class="mx-auto text-center">
            <i class="headline">Ruotsinnos: <a href="https://www.pauhu.fi/fi/">pauhu.fi</a> / Linda Ahlblad</i>
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