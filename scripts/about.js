var lastModified = document.lastModified;
let lastModifiedSpan = document.getElementById("lastModified");
lastModifiedSpan.innerHTML = lastModified;

//-------------------------------------------------------------------------

function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 34.0522, lng: -118.2437},
      zoom: 12
    });
    var marker = new google.maps.Marker({
      position: {lat: 34.0522, lng: -118.2437},
      map: map,
      title: 'Los Angeles'
    });
  }