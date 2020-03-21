const { localizeServices, findLocation } = require('./localize')

const getServices = function (services) {
    const svcs = localizeServices(services)
    const locDoc = findLocation(this.allLocations, this.selectedLocation)
    return svcs.filter((svc) => {
        const locFilter = !locDoc
                    || svc.locations.includes(locDoc.name.fi) 
                    || svc.locations.includes('National')
        const categoryFilter = svc.category == this.selectedCategory
                    || !this.selectedCategory

        return locFilter && categoryFilter
    })
}

module.exports = {
    getServices
}