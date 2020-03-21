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
            mainTitle: 'Löydä apua karanteenissa',
            frontTitle1: 'Karanteenissa.fi kokoaa tietoa erilaisista tuote- ja palveluratkaisuista koronaviruksen vaikutusten ehkäisemiseksi.',
            frontTitle2: 'Pidetään toisistamme huolta. <3'
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
            contactButton: 'Kontakta oss',
            mainTitle: 'Hjälp för din karantän',
            frontTitle1: 'Karanteenissa.fi samlar information om olika produkt- och servicelösningar för att förebygga coronavirusets verkningar.',
            frontTitle2: 'Låt oss ta hand om varandra. <3'
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
            serviceButton: 'Services',
            mainTitle: 'Find help in quarantine',
            frontTitle1: 'Karanteenissa.fi combines information about different services to minimize the effects of the Corona virus',
            frontTitle2: 'Let us take care of each other. <3'
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