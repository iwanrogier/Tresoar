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
    [-16.825576, -14.25],
    [-16.274533, -14.8],
    [-15.066937, -14.7],
    [-12.93737, -14.492332],
    [-12.427522, -14.283292],
    [-12.07003, -13.603911],
    [-11.763227, -12.663229],
    [-11.302384, -11.879328],
], {
    weight: 2,
    color: '#000',
    fillOpacity: .5,
    fillColor: '#dccca4'
}).on('click', function() {
    window.open('../friesland.html', '_self');
}).addTo(map);

/*/ Popup with longitude latitude
function onMapClick(e) {
    alert(e.latlng);
}*/

map.on('click', onMapClick);

// Circle Denmark
var circleDK = L.circle([15.707663, 24.697266], {
    color: '#d1050c',
    weight: 0,
    fillOpacity: 0,
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