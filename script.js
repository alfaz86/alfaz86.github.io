let map;
let marker;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -6.8514581, lng: 108.0169113 },
    zoom: 15,
  });
  marker = new google.maps.Marker({
    position: { lat: -6.8507647, lng: 108.0161274 },
    map: map,
  });
}
