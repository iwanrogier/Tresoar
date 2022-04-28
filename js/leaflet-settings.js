// Map corners defined
var corner1 = L.latLng(56.728622, -98.4375),
corner2 = L.latLng(-57.136239, 98.4375),
bounds = L.latLngBounds(corner1, corner2);

// Map initialisation
var map = L.map('map', {
wheelPxPerZoomLevel: 240,	
zoomSnap: 0.25,
zoomDelta: 0.5,
minZoom: 3.25,
maxZoom: 4.75,
maxBounds: bounds
}).setView([(56.728622, -98.4375), (-57.136239, 98.4375)], 3.25);

// Reference the tiles
L.tileLayer('images/maps/{z}/{x}/{y}.png', {
continuousWorld: false,
noWrap: true,
}).addTo(map);

// Marker (Leeuwarden)
var markLeeuwarden = L.marker([-12.897489, -13.535156]).addTo(map);
markLeeuwarden.bindPopup("<strong>Leeuwarden</strong>");

// Marker (Helsingor)
var markHelsingor = L.marker([15.707663, 24.697266]).on('click', function() {
window.open('http://www.soundtoll.nl/index.php/nl/', '_blank');
}).addTo(map);

// Popup with longitude latitude
function onMapClick(e) {
alert(e.latlng);
}

map.on('click', onMapClick);