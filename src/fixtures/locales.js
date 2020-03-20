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
            typeSelector: 'Tyyppi',
            locationSelector: 'Paikka'
        }
    },
    se: {
        app: {
            serviceButton: 'ruotsiksi',
            contactButton: 'ruotsiaaaa'
        },
        services: {
            typeSelector: 'En osaa',
            locationSelector: 'ruotsia'
        }
    },
    gb: {
        app: {
            contactButton: 'Contact us',
            serviceButton: 'Services'
        },
        services: {
            typeSelector: 'Type',
            locationSelector: 'Location'
        }
    }
}

module.exports = { locales, menuLocalizations }