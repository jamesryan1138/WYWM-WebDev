// Add your Mapbox access token
      mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXNyeWFuMTEzOCIsImEiOiJjanp4bWVlMTYwYzBiM25veXg0Mzd6Mm91In0.mB2WrKrXRb38UKRl-mE47g';
      const vancouver = [	-123.11, 49.24];
      const calgary = [	-114.06, 51.04];
      const toronto = [	-79.34, 43.65];
      const ottawa = [	-75.69, 45.42];
      const montreal = [	-73.56, 45.50];
      const end = [74.5, 40];
      const map = new mapboxgl.Map({
        container: 'map', // Specify the container ID
        // style: 'mapbox://styles/jamesryan1138/ckuhfh0qg9csm17l7y6l5h6yy', // Specify which map style to use
        style: 'mapbox://styles/mapbox/satellite-streets-v11', // Specify which map style to use
        center: [-115.392,51.059], // Specify the starting position
        pitch: 60,
        bearing: -60,
        zoom: 14 // Specify the starting zoom
      });

// Add the control to the map.
      map.addControl(
      new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      mapboxgl: mapboxgl
      })
      );

// Set the City to Vancouver
document.getElementById('vancouver').addEventListener('click', () => {
map.flyTo({
center: vancouver,
zoom: 11,
bearing: 0,
speed: 0.5, // make the flying slow
curve: 0.7, // change the speed at which it zooms out
easing: (t) => t,
// this animation is considered essential with respect to prefers-reduced-motion
essential: true
});
});

// Set the City to Calgary
document.getElementById('calgary').addEventListener('click', () => {
map.flyTo({
center: calgary,
zoom: 11,
bearing: 0,
speed: 0.5, // make the flying slow
curve: 0.7, // change the speed at which it zooms out
easing: (t) => t,
// this animation is considered essential with respect to prefers-reduced-motion
essential: true
});
});

// Set the City to Toronto
document.getElementById('toronto').addEventListener('click', () => {
map.flyTo({
center: toronto,
zoom: 11,
bearing: 0,
speed: 0.5, // make the flying slow
curve: 0.7, // change the speed at which it zooms out
easing: (t) => t,
// this animation is considered essential with respect to prefers-reduced-motion
essential: true
});
});

// Set the City to Ottawa
document.getElementById('ottawa').addEventListener('click', () => {
map.flyTo({
center: ottawa,
zoom: 11,
bearing: 0,
speed: 0.5, // make the flying slow
curve: 0.7, // change the speed at which it zooms out
easing: (t) => t,
// this animation is considered essential with respect to prefers-reduced-motion
essential: true
});
});

// Set the City to Montreal
document.getElementById('montreal').addEventListener('click', () => {
map.flyTo({
center: montreal,
zoom: 11,
bearing: 0,
speed: 0.5, // make the flying slow
curve: 0.7, // change the speed at which it zooms out
easing: (t) => t,
// this animation is considered essential with respect to prefers-reduced-motion
essential: true
});
});

// Target the params form in the HTML
const params = document.getElementById('params');

// Target the params form in the HTML for Map style change
const layerList = document.getElementById('menu');
const inputs = layerList.getElementsByTagName('input');

for (const input of inputs) {
input.onclick = (layer) => {
const layerId = layer.target.id;
map.setStyle('mapbox://styles/mapbox/' + layerId);
};
}

// Create variables to use in getIso()
const urlBase = 'https://api.mapbox.com/isochrone/v1/mapbox/';
const lon = -77.034;
const lat = 38.899;
let profile = 'cycling';
let minutes = 10;

// Set up a marker that you can use to show the query's coordinates
const marker = new mapboxgl.Marker({
'color': '#FFF01F'
});

// Create a LngLat object to use in the marker initialization
// https://docs.mapbox.com/mapbox-gl-js/api/#lnglat
const lngLat = {
lon: lon,
lat: lat
};

// Create a function that sets up the Isochrone API query then makes a fetch call
async function getIso() {
const query = await fetch(
`${urlBase}${profile}/${lon},${lat}?contours_minutes=${minutes}&polygons=true&access_token=${mapboxgl.accessToken}`,
{ method: 'GET' }
);
const data = await query.json();
// Set the 'iso' source's data to what's returned by the API query
map.getSource('iso').setData(data);
}

// When a user changes the value of profile or duration by clicking a button, change the parameter's value and make the API query again
params.addEventListener('change', ({ target }) => {
if (target.name === 'profile') {
profile = target.value;
} else if (target.name === 'duration') {
minutes = target.value;
}

getIso();
});

map.on('load', () => {
// When the map loads, add the source and layer
map.addSource('iso', {
type: 'geojson',
data: {
'type': 'FeatureCollection',
'features': []
}
});



map.addLayer(
{
'id': 'isoLayer',
'type': 'fill',
'source': 'iso',
'layout': {},
'paint': {
'fill-color': '#39FF14',
'fill-opacity': 0.5
}
},
'poi-label'
);

// Initialize the marker at the query coordinates
marker.setLngLat(lngLat).addTo(map);

// Make the API call
getIso();
});
