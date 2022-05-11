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

// Frisia icon [DO NOT REMOVE]
var province = L.icon({
    iconUrl: '../images/friesland-highlight.png',
    iconSize:     [71, 82], // size of the icon
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
});

L.marker([-22.355421, -13.787869], {icon: province}).addTo(map);

// Frisia polygon
var polygon = L.polygon([
    [-12.12113, -10.886387],
    [-12.886432, -10.781866],
    [-14.156691, -9.990907],
    [-16.10918, -10.584397],
    [-17.674027, -11.931588],
    [-17.275242, -12.558709],
    [-17.225333, -13.23809],
    [-17.275242, -13.865211],
    [-16.825576, -14.335552],
    [-16.274533, -14.701372],
    [-15.066937, -14.649112],
    [-12.93737, -14.492332],
    [-12.427522, -14.283292],
    [-12.07003, -13.603911],
    [-11.763227, -12.663229],
    [-11.302384, -11.879328],
], {
    weight: 2,
    color: '#000',
    fillOpacity: .5,
    fillColor: '#9c9c9c'
}).addTo(map);

// Popup with longitude latitude
function onMapClick(e) {
    alert(e.latlng);
}

map.on('click', onMapClick);

// Circle Denmark
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