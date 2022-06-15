// Map corners defined
var corner1 = L.latLng(50.276024, -89.276504),
corner2 = L.latLng(-38.921368, 97.605536),
bounds = L.latLngBounds(corner1, corner2);

// Map initialisation
var map = L.map('map', {
    zoomControl: false,
    wheelPxPerZoomLevel: 240,	
    zoomSnap: 0.25,
    zoomDelta: 0.5,
    minZoom: 3.65,
    maxZoom: 4.75,
    maxBounds: bounds
}).setView([(50.276024, -89.276504), (-38.921368, 97.605536)], 3.65);

// Reference the tiles
L.tileLayer('images/maps/Map-Frisia/{z}/{x}/{y}.png', {
    continuousWorld: false,
    noWrap: true,
}).addTo(map);

// Zoom bottom left
L.control.zoom({
    position: 'bottomleft'
}).addTo(map);

L.control.fullscreen({
    position: 'bottomleft'
}).addTo(map);

// Popup with longitude latitude
function onMapClick(e) {
    alert(e.latlng);
}

map.on('click', onMapClick);