const locales = [
    {
        lang: 'Suomi',
        value: 'fi'
    }, {
        lang: 'English',
        value: 'gb'
    }, {
        lang: 'Svenska',
        value: 'se'
    }
]

const menuLocalizations = {
    fi: {
        app: {
            serviceButton: 'Palvelut',
            contactButton: 'Ota yhteyttä',
        },
        services: {
            categorySelector: 'Kategoria',
            locationSelector: 'Paikka',
        },
        home: {
            searchButton: 'Hae',
            tellUsButton: 'Kerro meille palvelusta',
            tipsButton: 'Vinkit',
            facebookButton: 'Keskustele fb-ryhmässä'
        }
    },
    se: {
        app: {
            serviceButton: 'Tjänster',
            contactButton: 'Kontakta oss'
        },
        services: {
            categorySelector: 'Kategori',
            locationSelector: 'Plats',
        },
        home: {
            searchButton: 'Search',
            tellUsButton: 'Tell us about a new service',
            tipsButton: 'Tips',
            facebookButton: 'Discuss on Facebook'
        }
    },
    gb: {
        app: {
            contactButton: 'Contact us',
            serviceButton: 'Services'
        },
        services: {
            categorySelector: 'Category',
            locationSelector: 'Location',
        },
        home: {
            searchButton: 'Search',
            tellUsButton: 'Tell us about a new service',
            tipsButton: 'Tips',
            facebookButton: 'Discuss on Facebook'
        }
    }
}

module.exports = { locales, menuLocalizations }