//for displaying propersized image for device
$("img").each(function(item){
	if(window.innerWidth <= 800){
		ImageSizing("Small", this);
	}else if(window.innerWidth < 2000 && window.innerWidth > 800){
		ImageSizing("Medium", this);
	}else{
		ImageSizing("Large", this);
	}
});

function ImageSizing(sizeNeeded, item){
	//check what image already is
	if((item.src).includes("Large")){
		//then chack if requested size already is the correct value
		if(sizeNeeded == "Large") return;
		else{
			item.src = (item.src).replace("Large", sizeNeeded);
		}
	}else if((item.src).includes("Medium")){
		//then chack if requested size already is the correct value
		if(sizeNeeded == "Medium") return;
		else{
			item.src = (item.src).replace("Medium", sizeNeeded);
		}
	}else if((item.src).includes("Small")){
		//then chack if requested size already is the correct value
		if(sizeNeeded == "Small") return;
		else{
			item.src = (item.src).replace("Small", sizeNeeded);
		}
	}
}

if(window.innerWidth < 800){
    $("#careInner").removeClass("hidden");
    $("#careOuter").addClass("hidden");
}
else{
    if($("#careOuter").hasClass("hidden")) $("#careOuter").removeClass("hidden");
    if(!$("#careOuter").hasClass("hidden")) $("#careInner").addClass("hidden");
}

$(document).ready(function(){
	if($("#collapseButton").is(":visible")){
	    $(".dataList").css("border", "none");
	    $(".dataList").css("border-bottom", "2px #ffdf27 solid");
	    $(".dataList").css("padding-bottom", "5px");
	    
	    $(".readMore").css("padding-left", "40%");
	    $(".readMore").css("float", "none");
	    
	    $("#careInner").removeClass("hidden");
	    $("#careOuter").addClass("hidden");
    }
    else{
    	$(".dataList").css("border", "none");
    	$(".dataList").css("border-right", "2px #ffdf27 solid");
	    $(".dataList").css("padding-bottom", "0px");
	    
	    $(".readMore").css("padding-left", "0");
	    $(".readMore").css("float", "right");
	    
	    if($("#careOuter").hasClass("hidden")) $("#careOuter").removeClass("hidden");
	    $("#careInner").addClass("hidden");
    }
    
    if(window.innerWidth > 550){
    	$("#logoP").css("float", "left");
    }else{
    	$("#logoP").css("float", "none");
    }
    
    if(window.innerWidth > 1300){
    	$("#infoContainer").insertAfter($("#mapContainer"));
    }else{
    	$("#mapContainer").insertAfter($("#infoContainer"));
    }
	    
    $(window).on('resize', function() {
    	if($("#collapseButton").is(":visible")){
		    $(".dataList").css("border", "none");
		    $(".dataList").css("border-bottom", "2px #ffdf27 solid");
		    $(".dataList").css("padding-bottom", "5px");
		    
		    $(".readMore").css("padding-left", "40%");
		    $(".readMore").css("float", "none");
		    
		    $("#careInner").removeClass("hidden");
		    $("#careOuter").addClass("hidden");
	    }
	    else{
	    	$(".dataList").css("border", "none");
	    	$(".dataList").css("border-right", "2px #ffdf27 solid");
		    $(".dataList").css("padding-bottom", "0px");
		    
		    $(".readMore").css("padding-left", "0");
		    $(".readMore").css("float", "right");
		    
		    if($("#careOuter").hasClass("hidden")) $("#careOuter").removeClass("hidden");
		    $("#careInner").addClass("hidden");
	    }
	    
	    if(window.innerWidth > 570){
	    	$("#logoP").css("float", "left");
	    	$("#buttonBreak").addClass("hidden");
	    }else{
	    	$("#logoP").css("float", "none");
	    	
	    	if($("#buttonBreak").hasClass("hidden")) $("#buttonBreak").removeClass("hidden");

	    }
	    
	    if(window.innerWidth > 1300){
	    	$("#infoContainer").insertAfter($("#mapContainer"));
	    }else{
	    	$("#mapContainer").insertAfter($("#infoContainer"));
	    }
	    
	    $("img").each(function(item){
			if(window.innerWidth <= 800){
				ImageSizing("Small", this);
			}else if(window.innerWidth < 2000 && window.innerWidth > 800){
				ImageSizing("Medium", this);
			}else{
				ImageSizing("Large", this);
			}
		});
    });
});

//to fix
//issue the request care button does not do not center in phone instantly
//issue the request care button page form does not do not center all input boxes in phone instantly
//mobile can't see the captions on slider images
//add images to services page and why age alone
//make requestcar page nt have the form wrap around the image on medium screen sizes?