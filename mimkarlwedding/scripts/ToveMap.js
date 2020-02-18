src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCocXfV9G1SlwTr33Lajk8lKqqXLWkkqEA&callback=initMap"

// Initialize and add the map
function initMap() {
  // The location of Tove Valley
  var uluru = {lat: 52.124850, lng: -0.962745};
  // The map, centered at Tove Valley
  var map = new google.maps.Map(
      document.getElementById('tove-valley-map'), {zoom: 4, center: uluru});
  // The marker, positioned at Tove Valley
  var marker = new google.maps.Marker({position: uluru, map: map});
}
