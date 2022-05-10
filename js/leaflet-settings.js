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
L.tileLayer('images/maps/Map-Europe/{z}/{x}/{y}.png', {
    continuousWorld: false,
    noWrap: true,
}).addTo(map);

// Popup with longitude latitude
function onMapClick(e) {
    alert(e.latlng);
}

map.on('click', onMapClick);

// Cirkel Nederland
var circleNL = L.circle([-13.939952, -12.526939], {
    color: '#FF9B00',
    weight: 0,
    fillOpacity: 0,
    radius: 700000
}).addTo(map);

circleNL.on('mouseover',function(ev) {
    this.setStyle({
        weight: 3,
        fillOpacity: 0.5,
    });
});

circleNL.on('mouseout', function(ev) {
    this.setStyle({
        weight: 0,
        fillOpacity: 0,
    });
});

// Cirkel Denemarken
var circleDK = L.circle([15.707663, 24.697266], {
    color: '#d1050c',
    fillOpacity: 0.5,
    radius: 700000
}).addTo(map);

circleDK.on('mouseover',function(ev) {
    this.setStyle({
        weight: 3,
        fillOpacity: 0.5,
    });
});

circleDK.on('mouseout', function(ev) {
    this.setStyle({
        weight: 0,
        fillOpacity: 0,
    });
});