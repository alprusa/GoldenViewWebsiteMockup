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
    });
});