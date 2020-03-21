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
            upButton: 'Ylös',
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
            upButton: 'Upp'
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
            upButton: 'Up'
        }
    }
}

module.exports = { locales, menuLocalizations }