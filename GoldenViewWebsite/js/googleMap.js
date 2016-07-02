var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var mapCenterPoint = new google.maps.LatLng(34.638650, -120.451350,17); //loaction of goldenView
var markerListener;
var marker;
var mapTimer;
var map;


function initialize() {
	directionsDisplay = new google.maps.DirectionsRenderer();

  	var mapProp = {
	    center:mapCenterPoint,
	    zoom:17,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	
  	map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
  	
  	var pinIcon = new google.maps.MarkerImage(
	    "../img/mapIcon.png",
	    null, /* size is determined at runtime */
	    null, /* origin is 0,0 */
	    null, /* anchor is bottom center of the scaled image */
	    new google.maps.Size(50, 50)
	);  

  	marker=new google.maps.Marker({
	  position:mapCenterPoint,
	});
	
	marker.setAnimation(google.maps.Animation.BOUNCE);
    setTimeout(function(){ marker.setAnimation(null); }, 2250);
	
	marker.setMap(map);
	
	var infowindow = new google.maps.InfoWindow({
	  content:"Golden View Senior Services"
	});
	
	infowindow.open(map,marker);

	markerListener = google.maps.event.addListener(map,'center_changed',function() {
	  mapTimer = window.setTimeout(function() {
	    map.panTo(marker.getPosition());
	  },3000);
	});
	
	directionsDisplay.setMap(map);
}

function calcRoute() {
  var selectedMode = "DRIVING";
  var request = {
      origin: $('#StreetAddress').val() + " "+ $('#City').val() + " " + $('#State').val() + " " + $('#Zipcode').val(),
      destination: mapCenterPoint,
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode[selectedMode]
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
  
  google.maps.event.removeListener(markerListener);
  clearTimeout(mapTimer);

	marker.setMap(null);
}

google.maps.event.addDomListener(window, 'load', initialize);