//Maps
var map = new GMaps({
    div: '.map',
    lat: 41.9992603,
    lng: 21.5,
    zoom: 12
  });

  // Maps marker (to add a marker, we need to define a map variable in the Maps code)
  map.addMarker({
    lat: 41.9992603,
    lng: 21.42,
    title: 'Skopje',
    infoWindow: {
      content: '<p>Our Skopje HQ</p>'
    }
  });
