function runBitShiftAnimation(){
	var numbers = document.querySelectorAll("#bits p");
	var animation = setInterval(shift,150)
	function shift(){
		var last = numbers[numbers.length-1].innerHTML;
		for(var i = numbers.length-1; i > 0; i--){
			numbers[i].innerHTML = numbers[i-1].innerHTML;
		}
		numbers[0].innerHTML = last;
	}
}

function mouseOver(item){
	var animation = setInterval(darken,13);
	var opac = 0.0;
	function darken(){
		item.style.backgroundColor = "rgba(0,0,0,"+opac+")";
		if(opac >= 0.12){
			clearInterval(animation);
		}
		opac += 0.008;
	}
}

function mouseOut(item){
	var animation = setInterval(lighten,20);
	var opac = 0.12;
	function lighten(){
		item.style.backgroundColor = "rgba(0,0,0,"+opac+")";
		if(opac <= 0){
			clearInterval(animation);
		}
		opac -= 0.008;
	}
}
