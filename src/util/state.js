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
    setSelectedCategory: (val) => {
        console.log(val)
        if (val && val.target && val.target.value) {
            state.selectedCategory = val.target.value
        } else {
            state.selectedCategory = val
        }
    },
    setSelectedLocation: (val) => {
        console.log(val)
        if (val && val.target && val.target.value) {
            state.selectedLocation = val.target.value
        } else {
            state.selectedLocation = val
        }
    }
}

export const computeds = {
    locale: { get: getters.locale, set: mutators.locale },
    selectedCategory: { get: getters.selectedCategory, set: mutators.setSelectedCategory },
    selectedLocation: { get: getters.selectedLocation, set: mutators.setSelectedLocation }
}


