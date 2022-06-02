// Variable for cities
var cities = null;

// Retrieve all cities from the API
await fetch("https://sonttol-cms.herokuapp.com/api/cities")
    .then(response => response.json())
    .then(data => cities = data);

cities.forEach(city => {
    L.marker([16.105071, -28.132212])
        .addTo(map)
        .bindTooltip(city.name, {permanent: true})
        .openTooltip();
    
    console.log("Name: " + city.name)
});