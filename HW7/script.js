// Add more elements to these lists. The contents do not have to be real.
const GEOGRAPHY_LIST = [
    {
        country: 'United States',
        capital: 'Washington',
        largestCity: 'New York',
        subdivisionName: 'state',
        subdivisions: [
            {
                name: 'Louisiana',
                capital: 'Baton Rouge',
                largestCity: 'New Orleans',
                area: 134264,
            },
            {
                name: 'California',
                capital: 'Sacramento',
                largestCity: 'Los Angeles',
                area: 423970,
            },
            {
                name: 'Nevada',
                capital: 'Carson City',
                largestCity: 'Las Vegas',
                area: 286382,
            },
        ],
    },
    {
        country: 'Guatemala',
        capital: 'Guatemala City',
        largestCity: 'Guatemala City',
        subdivisionName: 'department',
        subdivisions: [
            {
                name: 'Huehuetenango',
                capital: 'Huehuetenango',
                largestCity: 'Huehuetenango',
                area: 7403,
            },
            {
                name: 'Izabal',
                capital: 'Puerto Barrios',
                largestCity: 'Puerto Barrios',
                area: 9038,
            },
            {
                name: 'El Progreso',
                capital: 'Guastatoya',
                largestCity: 'Guastatoya',
                area: 1922,
            },
        ],
    },
    {
        country: 'Fictionland',
        capital: 'Imaginaria',
        largestCity: 'Fabletown',
        subdivisionName: 'region',
        subdivisions: [
            {
                name: 'Tall Tales',
                capital: 'Legendarium',
                largestCity: 'Mythopolis',
                area: 12345,
            },
            {
                name: 'Fables',
                capital: 'Narratoria',
                largestCity: 'Fictionville',
                area: 67890,
            },
        ],
    },
    {
        country: 'Wonderland',
        capital: 'Heartcastle',
        largestCity: 'Spadeport',
        subdivisionName: 'province',
        subdivisions: [
            {
                name: 'Looking Glass',
                capital: 'Mirror City',
                largestCity: 'Reflection Town',
                area: 12345,
            },
            {
                name: 'Rabbit Hole',
                capital: 'Bunny Burrow',
                largestCity: 'Carrotville',
                area: 6789,
            },
        ],
    }
]
function convertToHTML(geoData) {
    var mainContent = document.querySelector('main');
    geoData.forEach(function(country) {
        var section = document.createElement('section');
        var countryInfo = '<h2>' + country.country + '</h2>';
        countryInfo += '<p><strong>Capital:</strong> ' + country.capital + '</p>';
        countryInfo += '<p><strong>Largest City:</strong> ' + country.largestCity + '</p>';
        countryInfo += '<h3>Subdivisions (' + country.subdivisionName + 's):</h3>';
        var list = '<ul>';
        country.subdivisions.forEach(function(subdivision) {
            list += '<li>';
            list += '<strong>' + subdivision.name + '</strong>';
            list += '<p>Capital: ' + subdivision.capital + '</p>';
            list += '<p>Largest City: ' + subdivision.largestCity + '</p>';
            list += '<p>Area: ' + subdivision.area + ' km<sup>2</sup></p>';
            list += '</li>';
        });
        list += '</ul>';
        section.innerHTML = countryInfo + list;
        mainContent.appendChild(section);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    convertToHTML(GEOGRAPHY_LIST);
});