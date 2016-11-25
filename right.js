
{var slider_array = new Array();
slider_array[0] = "upper1.jpg";
slider_array[1] = "upper2.jpg";
slider_array[2] = "upper3.jpg";
slider_array[3] = "upper4.jpg";


var i= 0;
function swaping() {
	document.slide.src = slider_array[i] ;
	if(i < slider_array.length-1)
		i++;
	else
		i=0;
	
	setTimeout(swaping , 5000);
}
window.onload = swaping ;
}  