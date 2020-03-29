const { localizeServices, findLocation, findCategory } = require('./localize')

const getServices = function (services) {
    const svcs = localizeServices(services)
    const locDoc = findLocation(this.allLocations, this.selectedLocation)
    const catDoc = findCategory(this.allCategories, this.selectedCategory)
    return svcs.filter((svc) => {
        const locFilter = !locDoc
                    || svc.locations.includes(locDoc.name.fi) 
                    || svc.locations.includes('National')
        const catFilter = !catDoc
                    || svc.categories.includes(catDoc.name.fi)

        return locFilter && catFilter
    })
}

module.exports = {
    getServices
}