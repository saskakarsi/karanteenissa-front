const { getters } = require('./state')

const localizeServices = (services) => {
    const svcs = services
    return svcs
}

const localizeLocations = (locations) => {
    const lang = getters.locale().value
    const locs = locations.map((loc) => {
        if (loc.name[lang]) {
            return {...loc, current: loc.name[lang]}
        } else {
            return {...loc, current: loc.name['fi']}
        }
    })
    return locs
}

module.exports = { 
    localizeServices, 
    localizeLocations 
}