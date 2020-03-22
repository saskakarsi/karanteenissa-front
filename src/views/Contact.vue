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
        <v-col class="mx-auto text-center">
            <h1 class="headline">Karanteenissa.fi kokoaa tietoa erilaisista tuote- ja palveluratkaisuista koronaviruksen vaikutusten ehkäisemiseksi.</h1>
        </v-col>

        <v-col class="mx-auto text-center">
            <h1 class="headline">Pidetään toisistamme huolta.</h1>
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
            {{ new Date().getFullYear() }} — <strong>Karanteenissa.fi</strong>
        </v-col>
        </v-footer>
    </v-col>
    </v-container>
</template>

<script>
export default {
    data: () => ({})
}
</script>