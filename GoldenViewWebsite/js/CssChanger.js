$(document).ready(function(){
	if($("#collapseButton").is(":visible")){
	    $(".dataList").css("border", "none");
	    $(".dataList").css("border-bottom", "2px #ffdf27 solid");
	    $(".dataList").css("padding-bottom", "5px");
	    
	    $(".readMore").css("padding-left", "40%");
	    $(".readMore").css("float", "none");
    }
    else{
    	$(".dataList").css("border", "none");
    	$(".dataList").css("border-right", "2px #ffdf27 solid");
	    $(".dataList").css("padding-bottom", "0px");
	    
	    $(".readMore").css("padding-left", "0");
	    $(".readMore").css("float", "right");
    }
    
    if(window.innerWidth > 550){
    	$("#logoP").css("float", "left");
    	if($("#topInfo").hasClass("hidden")) $("#topInfo").removeClass("hidden");
    }else{
    	$("#topInfo").addClass("hidden");
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
	    }
	    else{
	    	$(".dataList").css("border", "none");
	    	$(".dataList").css("border-right", "2px #ffdf27 solid");
		    $(".dataList").css("padding-bottom", "0px");
		    
		    $(".readMore").css("padding-left", "0");
		    $(".readMore").css("float", "right");
	    }
	    
	    if(window.innerWidth > 570){
	    	$("#logoP").css("float", "left");
	    	if($("#topInfo").hasClass("hidden")) $("#topInfo").removeClass("hidden");
	    	$("#buttonBreak").addClass("hidden");
	    }else{
	    	$("#topInfo").addClass("hidden");
	    	if($("#buttonBreak").hasClass("hidden")) $("#buttonBreak").removeClass("hidden");
	    	$("#logoP").css("float", "none");
	    }
	    
	    if(window.innerWidth > 1300){
	    	$("#infoContainer").insertAfter($("#mapContainer"));
	    }else{
	    	$("#mapContainer").insertAfter($("#infoContainer"));
	    }
    });
});