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
    fillColor: '#dccca4',
    className: 'friesland'
}).on('click', function() {
    window.open('friesland.html', '_self');
}).addTo(map);

// Noordzee marker
var noordzeeMarker = L.marker([2.327145, -26.717066])
    .addTo(map)
    .bindTooltip('Noordzee', {permanent: true})
    .openTooltip();

// Oostzee marker
var oostzeeMarker = L.marker([7.312766, 55.065832])
    .addTo(map)
    .bindTooltip('Oostzee', {permanent: true})
    .openTooltip();

// Route #1
var route1 = [
    [-11.353626, -11.931588],
    [-5.930739, -12.349669],
    [-2.804633, -12.036108],
    [11.436794, -3.779016],
    [24.477459, -0.382111],
    [28.222877, 2.701234],
    [32.944556, 15.348173],
    [32.240078, 16.497894],
    [31.841385, 17.020495],
    [26.064238, 18.809592],
    [19.881758, 23.396225],
    [13.684116, 26.704437],
    [8.141327, 27.890591],
    [7.416424, 28.831273],
    [5.234999, 37.088365],
    [7.105378, 50.048865],
    [13.477864, 57.574316],
    [27.251541, 63.113884],
    [41.186064, 64.159086]
];

var routeLine = L.polyline(route1, {
    color: 'white',
    lineJoin: 'round',
    lineCap: 'round',
    opacity: 0.25,
    dashArray: '10'
}).addTo(map);

routeLine.bindPopup("<b>Kaag</b><br>Dit is de route langs het Sonttol.");

/*/ Popup with longitude latitude
map.on('click', function(e) {
    alert(e.latlng);
} );*/