<?php
	if (isset($_POST["submit"])) {
        $Name = $_POST['Name'];
		$email = $_POST['email'];
        $Subject = $_POST['Subject'];
		$Message = $_POST['Message'];
		$to = 'goldenviewseniorservices@yahoo.com';
		
		$body = "From: $Name\nE-Mail: $email\nSubject: $Subject\nMessage:\n $Message";
 
		// Check if subject has been entered
		if (!$_POST['Subject']) {
			$errSubject = 'Please enter a subject';
		}
		
		// Check if email has been entered and is valid
		if (!$_POST['email'] || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
			$errEmail = 'Please enter a valid email address';
		}
		
		//Check if message has been entered
		if (!$_POST['Message']) {
			$errMessage = 'Please enter your message';
		}
 
        // If there are no errors, send the email
        if (!$errSubject && !$errEmail && !$errMessage) {
            if (mail ($to, $Subject, $body, $email)) {
                $result='<p class="text-success">Thank You! We will be in touch</p>';
            } else {
                $result='<p class="text-danger">Sorry there was an error sending your message. Please try again later</p>';
            }
        }
	}
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">

		<!-- Always force latest IE rendering engine (even in intranet) & Chrome Frame
		Remove this if you use the .htaccess -->
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

		<title>Contact</title>
		<meta name="description" content="">
		<meta name="author" content="Alisa Prusa">

		<meta name="viewport" content="width=device-width; initial-scale=1.0">

		<!-- Replace favicon.ico & apple-touch-icon.png in the root of your domain and delete these references -->
		<link rel="shortcut icon" href="/favicon.ico">
		<link rel="apple-touch-icon" href="/apple-touch-icon.png">
		
		<link href="../defaultStyle.css" rel="stylesheet" type="text/css">
		<link href="contactStyle.css" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="../bootstrap/css/bootstrap.min.css">
	</head>

	<body>
		<div id="mainNav">
			<!--Navbar html section-->
			<nav class="navbar navbar-static-top" role="navigation">
                <div class="container-fluid">

                    <div class="navbar-header">
                        <!--Logo image button to go make to main page-->
                        <a href="../">
                        	<img src="../img/goldenViewLogo.jpg" class="img-responsive" id="logo"/>
                        	<img src="img/goldenViewLogo.jpg" class="img-responsive" id="logo"/>
                        </a>

                        <!--Button that is created for menu when screen size reaches a certain limit-->
                        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                    </div>

                    <!--Buttons to go to different pages of the website-->
                    <div class="collapse navbar-collapse" id="navItems">
                        <ul class="nav navbar-nav">
                            <li><a href="../">Home</a></li>
							<li><a href="../services/">Services</a></li>
							<li><a href="../about/">About Us</a></li>
							<li><a href="./">Contact</a></li>
                        </ul>
                    </div>
                </div>
             </nav>
             
 			<!--Main text field-->
 			<div id="SwooshDiv">
 			<div id="containerText">
 				<!--Google Map for directions-->
	 			<div id="googleMap"></div>
	 			
	 			<!--input Field to get the user's location to provide the directions-->
	 			<div id="directionInput">
	 				<p><b>Get Directions:</b></p>
					<input type="text" name="StreetAddress" id="StreetAddress" placeholder="Your Street Address" required><br>
					<input type="text" name="City" id="City" placeholder="City" required><br>
					<input type="text" name="State" id="State" placeholder="State" required><br>
					<input type="text" name="Zipcode" id="Zipcode" placeholder="Zipcode" required><br>
					<input id="submitButton" class="gVButton" type="submit" value="Submit" style="margin-top: 5px;" onclick="calcRoute();">
					<input id="reopenButton" class="gVButton hidden" type="button" value="See Results" style="margin-top: 5px;" onclick="directionsWindow();">
					<p style="color: #E82C0C;" id="errorText" class="hidden">Sorry there was an issue getting directions.</p>
	 			</div>
 			
	 			<!--Text directions pop-up box-->
	 			<div id="directionsModal" class="modal">

				  <!-- Modal content -->
				  <div class="modal-content">
				    <span class="close">x</span>
				    <div id="textDirections"></div>
				    <button id="printButton" class="gVButton" type="button" style="margin-top: 5px;" onclick="print();">Print</button>
				    
				  </div>
				
				</div>
	 			
	 			<div id="infoContainer">
		 			<!--email section-->
		 			<p ><b>Contact Us:</b>
	                     <a id="emails" href="mailto:goldenviewseniorservices@yahoo.com?subject=Golden View Senior Services">
	                     	<mark>email</mark>
	                     </a>
		        	</p>
		 			
		 			<!--address phone number section-->
		 			<div>
		 				<p><b>Address:</b> 104 South C St. Suite D
		 					Lompoc, CA 93436</p>
		 				<p><b>Phone:</b> (805) 740-9608</p>
		 				<p><b>Fax:</b> (805) 740-2044</p>
		 			</div>
		 			
		 			<!--Contact Form-->
		 			<form role="form" method="post" action="index.php">
		 				<p><b>Contact Form:</b></p>
	                    <input type="text" class="formBox" name="Name" id="Name" placeholder="Your Name" required><br>
						<input type="text" class="formBox" name="email" id="email" placeholder="Your email" required><br>
						<input type="text" class="formBox" name="Subject" id="Subject" placeholder="Subject" required><br>
						<textarea type="text" class="formBox" name="Message" rows=6 id="Message" placeholder="Your Message" required></textarea>
						<input id="submitButton" class="gVButton" type="submit" name="submit" value="Send" style="margin-top: 5px;">
	                    <?php echo "$result";?>
		 			</form>
		 			
		 			
	 			</div>
 			</div>
 			</div>
 			
 			<!--Buttons to go to different pages of the website-->
            <div>
                <ul id="navFooter">
                    <li><a href="../">Home</a></li>
					<li><a href="../services/">Services</a></li>
					<li><a href="../about/">About Us</a></li>
					<li><a href="./">Contact</a></li>
                </ul>
            </div>
 			
			<!--Footer section-->
             <footer id="footer">
				<p>
					Golden View Senior Services | 104 South C St. Suite D Lompoc, CA 93436 | 805-740-9608
				</p>
			</footer>
        </div>

		<script src="../jquery-1.2.0.js"></script>
    	<script src="../bootstrap/js/bootstrap.min.js"></script>
    	
    	<script src="https://maps.googleapis.com/maps/api/js"></script>
    	<script src="../js/googleMap.js"></script>
	</body>
</html>
