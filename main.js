


var box = document.getElementsByClassName("box");
var boxImg = document.querySelectorAll(".box img")
var score  = document.getElementById("score")
var popup  = document.getElementById("popup_window")
var lastscore  = document.getElementById("lastscore")
var again  = document.getElementById("play_again")

//
var bestScore  = document.getElementById("best_score")
var bestscorePoint= 0;
var liveScore = 0;

for (var i = 0; i < box.length; i++) {
	box[i].setAttribute("data-id",i)
	boxImg[i].setAttribute("data-id",i)
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
					  	scorePoint = scorePoint + 1;
					  

					  	if (cardQuantity == quantityChecker) {
					  		popup.classList.add("show")
					  		lastscore.innerHTML = Math.floor(scorePoint/lastTime * 57)

					  		liveScore = Math.floor(scorePoint/lastTime * 57)

					  		if (liveScore > bestscorePoint) {

					  			bestscorePoint = liveScore 
					  			bestScore.innerHTML = bestscorePoint
					  		}

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

					},300)

				x=0;
			}


		
	})
}

var timer = document.getElementById('time')
var minute = document.getElementById('minute')

var time = 0;
var changeTime = 0;
var lastTime = 0;


var interval = setInterval(function(){
		if (time == 60) {
			minute.classList.add('show')
			minute.innerHTML = changeTime;
			changeTime++;
			time = 1;
		}
		timer.innerHTML = time
		time ++;
		lastTime++;
	

	},1000)




// Hint 

var hintArray = [

	[0,11],
	[1,17],
	[2,13],
	[3,19],
	[4,16],
	[5,12],
	[6,10],
	[7,15],
	[8,14],
	[9,18]
]



setInterval(function(){

var random = Math.floor(Math.random() * box.length /2)
		
	box[hintArray[random][0]].classList.add("hint");	
	box[hintArray[random][1]].classList.add("hint");	

	setTimeout(function(){

		for (var i = 0; i < box.length; i++) {
			box[i].classList.remove("hint")
		}
	},500)
	

},10000)






again.addEventListener("click",function(){

	popup.classList.remove("show")

	time=0;
		lastTime=0;
		scorePoint =0;
		score.innerHTML =0;
		
		quantityChecker =1;

		x = 0;
		srcArray = []
		indexArray = []
		scorePoint = 0;

	for (var i = 0; i < box.length; i++) {
		boxImg[i].classList.remove("winner");
		box[i].classList.remove("winner");
		boxImg[i].classList.remove("active");
		

	}

})



