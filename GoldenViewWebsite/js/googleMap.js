var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var mapCenterPoint = new google.maps.LatLng(34.638650, -120.451350,17); //loaction of goldenView
var markerListener;
var marker;
var mapTimer;
var map;

var directionsCalculated = false;

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
      directionsCalculated = true;
    } else{
    	$("#errorText").removeClass("hidden");
    	console.log('Directions request failed due to ' + status);
    	directionsCalculated = false;
    }
  });
  
  google.maps.event.removeListener(markerListener);
  clearTimeout(mapTimer);

	marker.setMap(null);
	
	directionsWindow();
}

//modal functionality
var modal = document.getElementById('directionsModal');
	
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function directionsWindow(){
	// open the modal
	modal.style.display = "block";

	$('#textDirections').empty();
	$('#reopenButton').removeClass("hidden");
	
	//set directions on the modal
	directionsDisplay.setPanel(document.getElementById('textDirections'));
}

function print(){
	var printwindow = window.open('', 'printDirections', 'scrollbars=1,height=400,width=600');
    printwindow.document.write('<html><head><title>Directions</title>');
    printwindow.document.write('</head><body>');
    printwindow.document.write('<div id="textDirections"></div>');
    printwindow.document.write('</body></html>');
    
	directionsDisplay.setPanel(printwindow.document.getElementById('textDirections'));

    printwindow.document.close(); // necessary for IE >= 10
    printwindow.focus(); // necessary for IE >= 10

    printwindow.print();
    printwindow.close();
	
	modal.style.display = "none";
}

google.maps.event.addDomListener(window, 'load', initialize);