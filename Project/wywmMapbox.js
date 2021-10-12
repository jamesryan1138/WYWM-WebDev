// Add my Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1IjoiamFtZXNyeWFuMTEzOCIsImEiOiJjanp4bWVlMTYwYzBiM25veXg0Mzd6Mm91In0.mB2WrKrXRb38UKRl-mE47g';

// Set Coordinates for City selection
const vancouver = [-123.11, 49.24];
const calgary = [-114.06, 51.04];
const toronto = [-79.34, 43.65];
const ottawa = [-75.69, 45.42];
const montreal = [-73.56, 45.50];

// Initialize the map
const map = new mapboxgl.Map({
        container: 'map', // Container ID from HTML
        style: 'mapbox://styles/mapbox/satellite-streets-v11', // Specify which map style to use
        center: [-115.392,51.059], // Starting position IVO Canmore
        pitch: 60, // Camera pitch
        bearing: -60, //
        zoom: 14 // Specify the starting zoom
      });

// Add the local Search control to the map.
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

// Change map style to Satellite
document.getElementById('satellite').addEventListener('click', () => {
map.setStyle('mapbox://styles/mapbox/satellite-streets-v11');
});
// Change map style to Light
document.getElementById('lightStyle').addEventListener('click', () => {
map.setStyle('mapbox://styles/mapbox/light-v10');
});
// Change map style to Dark
document.getElementById('darkStyle').addEventListener('click', () => {
map.setStyle('mapbox://styles/mapbox/dark-v10');
});
