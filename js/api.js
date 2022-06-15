// Variable for cities
var cities = null;

var citiesIcon = L.icon({
    iconUrl: '../images/pins/city.svg'
});

// Retrieve all cities from the API
await fetch("https://sonttol-cms.herokuapp.com/api/cities")
    .then(response => response.json())
    .then(data => cities = data);

cities.forEach(city => {
    L.marker([city.latitude, city.longitude], {icon: citiesIcon})
        .addTo(map)
        .bindTooltip(city.name, {
            permanent: true,
            className: 'city-label'
        })
        .openTooltip();
});