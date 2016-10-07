
function append(f1, f2)
{
	if(f1) f1();
	if(f2) f2();
}




window.onload = append(window.onload, function()
{
	dec = 0;
	inc = 1;
	todo = 1;
	rgb = [255, 0, 0];
	
	setInterval("colors()", 80);
})





var rgb;
var inc;
var todo;
var dec;

function colors()
{
	if(todo == 1)
	{
		rgb[inc] += 1;
		
		if(rgb[inc] >= 255)
		{
			todo = 0;
			inc = ++inc % 3;
		}
	}
	else
	{
		rgb[dec] -= 1;
		
		if(rgb[dec] <= 0)
		{
			todo = 1;
			dec = ++dec % 3;
		}
	}
	
	var color = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";
	document.getElementById("un-favicon").style.backgroundColor = color;
}

function toTheTop() {
	window.scrollTo(0, 0);
}




