// Map corners defined
var corner1 = L.latLng(39.754927, -88.649383),
corner2 = L.latLng(-48.485904, 97.605536),
bounds = L.latLngBounds(corner1, corner2);

// Map initialisation
var map = L.map('map', {
    wheelPxPerZoomLevel: 240,	
    zoomSnap: 0.25,
    zoomDelta: 0.5,
    minZoom: 3.75,
    maxZoom: 4.75,
    maxBounds: bounds
}).setView([(39.754927, -88.649383), (-48.485904, 97.605536)], 3.75);

// Reference the tiles
L.tileLayer('images/maps/Map-Europe/{z}/{x}/{y}.png', {
    continuousWorld: false,
    noWrap: true,
}).addTo(map);

// Frisia polygon
var polygon = L.polygon([
    [-12.12113, -10.834127],
    [-12.12113, -11.147687],
    [-11.967801, -11.356727],
    [-11.609697, -11.618028],
    [-11.456082, -11.879328],
    [-11.609697, -12.245149],
    [-11.916672, -12.610969],
    [-12.17222, -13.29035],
    [-12.325431, -14.021991],
    [-12.886432, -14.387812],
    [-13.750949, -14.492332],
    [-14.814471, -14.544592],
    [-15.772238, -14.805893],
    [-16.424973, -14.596852],
    [-17.275242, -14.178772],
    [-17.37502, -13.760691],
    [-17.325138, -12.92453],
    [-17.424889, -12.349669],
    [-17.524585, -11.983848],
    [-17.823345, -11.931588],
    [-17.972538, -11.879328],
    [-17.674027, -11.461247],
    [-17.773586, -10.886387],
    [-17.474744, -10.416046],
    [-16.825576, -10.154746],
    [-16.625379, -9.423104],
    [-16.274533, -9.266324],
    [-15.570968, -9.423104],
    [-14.91151, -9.962916],
    [-13.750949, -10.416046],
    [-13.191907, -9.997965],
    [-12.682574, -9.893445],
    [-11.967801, -10.311526],
], {
    weight: 2,
    color: '#000',
    fillOpacity: .5,
    fillColor: '#dccca4'
}).on('click', function() {
    window.open('friesland.html', '_self');
}).addTo(map);

// Label
var noordzeeMarker = L.marker([2.327145, -26.717066])
    .addTo(map)
    .bindTooltip('Noordzee', {permanent: true})
    .openTooltip();

/*/ Route #1
var route1 = [[-1.662955, -31.447108], [25.398461, -40.315937], [15.725426, -14.744146], [28.559319, -13.266008]];

var polyline = L.polyline(route1, {
    color: 'red'
}).addTo(map);*/

/*/ Popup with longitude latitude
function onMapClick(e) {
    alert(e.latlng);
}

map.on('click', onMapClick);*/