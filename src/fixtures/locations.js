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
    }
]
for (const loc of locations) {
    loc.current = loc.name.fi
}

module.exports = locations