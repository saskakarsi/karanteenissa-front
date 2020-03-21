import Vue from 'vue';

const state = Vue.observable({
    locale: {
        lang: 'Suomi',
        value: 'fi'
    },
    selectedCategory: undefined,
    selectedLocation: undefined
})

export const getters = {
    locale: () => state.locale,
    selectedCategory: () => state.selectedCategory,
    selectedLocation: () => state.selectedLocation
}
export const mutators = {
    setLocale: (val) => state.locale = val,
    setselectedCategory: (val) => state.selectedCategory = val,
    setSelectedLocation: (val) => state.selectedLocation = val
}


