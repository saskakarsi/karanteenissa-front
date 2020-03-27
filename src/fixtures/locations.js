const locations = [
    {
        name: {
            fi: 'Helsinki',
            se: 'Helsingfors'
        },
    },
    {
        name: {
            fi: 'Kuusamo',
            se: 'Kuusamo',
        }
    },
    {
        name: {
            fi: 'Koko Suomi',
            se: 'National',
            gb: 'National'
        }
    }
]
for (const loc of locations) {
    loc.current = loc.name.fi
}

module.exports = locations