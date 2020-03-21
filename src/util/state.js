import Vue from 'vue';

const state = Vue.observable({
    locale: {
        lang: 'Suomi',
        value: 'fi'
    },
    selectedService: undefined,
    selectedLocation: undefined
})

export const getters = {
    locale: () => state.locale,
    selectedService: () => state.selectedService,
    selectedLocation: () => state.selectedLocation
}
export const mutators = {
    setLocale: (val) => state.locale = val,
    setSelectedService: (val) => state.selectedService = val,
    setSelectedLocation: (val) => state.selectedLocation = val
}


