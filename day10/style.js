$(document).ready(function);

	$(#button_next).on("click", nextImage);
	$(#button_prev).on("click", previousImage);


});


var images = ["images/nyc.jpg", "images/la.jpg","images/sf.jpg"]

var i = 0

function previousImage(){

    // if i is not 0 
    if (i > 0){

        // then decrease i by 1
        i--;

    // else then i is 0
    } else {

        // so set i to the last place in the array
        i = images.length-1;
    }

    // change image to new i
    changeImage(i);


function changeImage(arrayPosition){
    $("#image-to-vote-on").attr("src",images[arrayPosition]);

}


// function next() {
// 	$("button_next").click(function() {
// 		$.each(images, function(index, element){
//     	  $("#carousel").append("<img src=' "+ element +" '>");
//     }
// }
// }
// });