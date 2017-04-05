var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

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

function validation(){
document.f.action="rest login.html";
document.f.submit();
}




<a href="basic.html">Home</a>
		<a href="signin.html" >Sign in</a>
		<a href="signup.html">Sign up</a> 
		<a href="review.html">Write Review</a>
		
		
		
		
		<div>
		<form method="post" name="f">
			<input type="text" placeholder="search here" id="search">
			<input type="button" value="search" id="button">
			
		</form>	
		<a href="signin.html" id="signin">Sign in</a>
		
		<hr>
	</div>
	
			<div id="imagedivision">
			<h1>Image SlideShow</h1>
			</div>
			
			
			<div id="reviewdivision">
			<h1>Top Reviews<h1>
			</div>
			