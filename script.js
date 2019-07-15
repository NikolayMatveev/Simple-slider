var mess = new Array("","Lamborghini Aventador", "Shelby Cobra",  "Ferrari 488", "Lamborghini Gallardo" ); 
		function doEvent(num) {
			var cv=document.getElementById('info');
			 cv.value = mess[num];
}

i=0;
function show() {
	ris = new Array('car1.jpg', 'car2.jpg', 'car3.jpg', 'car4.jpg');
	if (i >= 4) i = 0;
	r=document.getElementById('ca1')
	r.src=ris [i];
	i++;
	setTimeout ("show()", 1500);
}