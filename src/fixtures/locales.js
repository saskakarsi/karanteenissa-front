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
            serviceButton: 'Palvelut'
        },
        services: {
            typeSelector: 'Tyyppi',
            locationSelector: 'Paikka'
        }
    },
    se: {
        app: {
            serviceButton: 'ruotsiksi'
        },
        services: {
            typeSelector: 'En osaa',
            locationSelector: 'ruotsia'
        }
    },
    gb: {
        app: {
            serviceButton: 'Services'
        },
        services: {
            typeSelector: 'Type',
            locationSelector: 'Location'
        }
    }
}

module.exports = { locales, menuLocalizations }