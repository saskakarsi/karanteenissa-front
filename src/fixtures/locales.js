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
            contactButton: 'Ota yhteyttä'
        },
        services: {
            categorySelector: 'Kategoria',
            locationSelector: 'Paikka'
        }
    },
    se: {
        app: {
            serviceButton: 'ruotsiksi',
            contactButton: 'ruotsiaaaa'
        },
        services: {
            categorySelector: 'En osaa',
            locationSelector: 'ruotsia'
        }
    },
    gb: {
        app: {
            contactButton: 'Contact us',
            serviceButton: 'Services'
        },
        services: {
            categorySelector: 'Category',
            locationSelector: 'Location'
        }
    }
}

module.exports = { locales, menuLocalizations }