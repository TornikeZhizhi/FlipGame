


var box = document.getElementsByClassName("box");
var boxImg = document.querySelectorAll(".box img")
var score  = document.getElementById("score")
var popup  = document.getElementById("popup_window")


for (var i = 0; i < box.length; i++) {
	box[i].setAttribute("data-id",i)
}

function removeFlip(){
	for (var z = 0; z < box.length; z++) {
		boxImg[z].classList.remove("active");
	}
}

var x = 0;
var srcArray = []
var indexArray = []
var scorePoint = 0;

var cardQuantity = box.length / 2
var quantityChecker = 1;


for (var i = 0; i < box.length; i++) {

	box[i].addEventListener("click",function(){

		var boxIndex = Number(this.getAttribute("data-id"))
		var imgSource = box[boxIndex].children[0].getAttribute("src");

		srcArray.push(imgSource)
		indexArray.push(boxIndex)

		var srcIndex = srcArray[srcArray.length-1]
		var srcIndex2 = srcArray[srcArray.length-2]

		var index = indexArray[srcArray.length-1]
		var index2 = indexArray[srcArray.length-2]
			
			
			if (x == 0) {

				boxImg[boxIndex].classList.add("active");

				x=1;
			}else if (x == 1) {


					boxImg[boxIndex].classList.add("active");
					setTimeout(function(){


						if (index !== index2) {


					  if (srcIndex == srcIndex2) {
					  	scorePoint = scorePoint + 10;
					  

					  	if (cardQuantity == quantityChecker) {
					  		
					  	}
					  	quantityChecker++;
					  	score.innerHTML = scorePoint;

					  	box[indexArray[indexArray.length-1]].classList.add("winner");
					  	box[indexArray[indexArray.length-2]].classList.add("winner");

						boxImg[indexArray[indexArray.length-1]].classList.add("winner");
						boxImg[indexArray[indexArray.length-2]].classList.add("winner");
				
						  }else {

						  	removeFlip()
						  }

						}	else {
							console.log(x)
							x=1;
						}

					},100)

				x=0;
			}


		
	})
}