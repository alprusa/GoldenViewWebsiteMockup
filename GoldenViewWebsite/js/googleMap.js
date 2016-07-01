function initialize() {
	var mapCenterPoint = new google.maps.LatLng(34.638650, -120.451350,17); //loaction of goldenView
	
  	var mapProp = {
	    center:mapCenterPoint,
	    zoom:17,
	    mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	
  	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  	
  	var pinIcon = new google.maps.MarkerImage(
	    "../img/mapIcon.png",
	    null, /* size is determined at runtime */
	    null, /* origin is 0,0 */
	    null, /* anchor is bottom center of the scaled image */
	    new google.maps.Size(50, 50)
	);  

  
  	var marker=new google.maps.Marker({
	  position:mapCenterPoint,
	});
	
	marker.setMap(map);
	
	var infowindow = new google.maps.InfoWindow({
	  content:"Golden View Senior Services"
	  });
	
	infowindow.open(map,marker);

}

google.maps.event.addDomListener(window, 'load', initialize);