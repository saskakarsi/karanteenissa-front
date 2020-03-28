const { getters } = require('./state')

const localizeServices = (services) => {
    const lang = getters.locale().value
    const svcs = services.map((svc) => {
        if (svc.langs[lang]) {
            return { ...svc, current: svc.langs[lang] }
        } else {
            return { ...svc, current: svc.langs['fi'] }
        }
    })
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

const localizeCategories = (categories) => {
    const lang = getters.locale().value
    const cats = categories.map((cat) => {
        if (cat.name[lang]) {
            return {...cat, current: cat.name[lang]}
        } else {
            return {...cat, current: cat.name['fi']}
        }
    })
    return cats
}

const findLocation = (locations, locStr) => {
    const lang = getters.locale().value
    return locations.find((loc) => {
        return loc.name[lang] == locStr || loc.name.fi == locStr
    })
}

const findCategory = (categories, catStr) => {
    const lang = getters.locale().value
    return categories.find((cat) => {
        return cat.name[lang] == catStr || cat.name.fi == catStr
    })
}


module.exports = { 
    localizeServices, 
    localizeLocations,
    localizeCategories,
    findLocation,
    findCategory
}