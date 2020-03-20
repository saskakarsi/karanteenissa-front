import Vue from 'vue';

const state = Vue.observable({
    locale: {
        lang: 'Suomi',
        value: 'fi'
    },
})

export const getters = {
    locale: () => state.locale
}
export const mutators = {
    setLocale: (val) => state.locale = val
}


