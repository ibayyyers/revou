var i = 0; 			// Start Point
var images = [];	// Images Array
var time = 3000;	// Time Between Switch
	 
// Image List
images[0] = "asset/1.jpg";
images[1] = "asset/2.jpg";
images[2] = "asset/3.jpg";

// Change Image
function changeImg(){
	document.slide.src = images[i];

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}

	// Run function every x seconds
	setTimeout("changeImg()", time);
}

// Run function when page loads
window.onload=changeImg;



function validateForm() {
    var nama = document.getElementById('nama').value;
    var email = document.getElementById('email').value;
    var errorNama = document.getElementById('errornama');
    var errorEmail = document.getElementById('erroremail');

    var isValid = true;

    if (nama === '') {
        errorNama.textContent = 'Please enter your name';
        isValid = false;
    } else {
        errorNama.textContent = '';
    }

    if (!isValidEmail(email)) {
        errorEmail.textContent = 'Please enter a valid email address';
        isValid = false;
    } else {
        errorEmail.textContent = '';
    }

    return isValid;
}

function isValidEmail(email) {
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
    return regex.test(email);
}

