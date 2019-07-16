
// var input = $("#dateArea-StatementClients__Referrer__");
// var dash = "-"
// input.on("keydown",function(event){

// 	var inputLength = $("#dateArea-StatementClients__Referrer__").val().length
// 	var thisValue = $(this).val()
// 	var coma = event.which
// 	console.log(coma)

// 	if (coma == 37 || coma == 39) {
		
// 	}else {

// 	if (inputLength == 10 && coma !== 8) {
// 		event.preventDefault()
// 	}else {

// 			if (coma == 190) {
// 			event.preventDefault()
// 			}
// 			if (coma == 189) {
// 				event.preventDefault()
// 			}
// 			if (coma == 8) {
				
// 			}else {

// 				  var theEvent = event || window.event;

			
// 				  if (theEvent.type === 'paste') {
// 				      key = event.clipboardData.getData('text/plain');
// 				  } else {
			
// 				      var key = theEvent.keyCode || theEvent.which;
// 				      key = String.fromCharCode(key);
// 				  }
// 				  var regex = /[0-9]|\./;
// 				  if( !regex.test(key) ) {
// 				    theEvent.returnValue = false;
// 				    if(theEvent.preventDefault) theEvent.preventDefault();
// 				  }


// 				if (inputLength == 2) {
// 					input.val(thisValue + dash)
// 				}
// 				if (inputLength == 5) {
// 					input.val(thisValue + dash)

// 				}
// 			}
// 	}
// 	}


// })



// var fr = [23,31,11,311,4]
// var number = []

// var map = fr.map(function(element,index){

// 	// console.log(index)

// 	if (element > 20){

// 		number.push(element * 424)
// 	} 


// })


// console.log(number)

// var fruits = ["Banana", "Orange", "Apple", "Mango"];
 

//  fruits.forEach(function(das,dax){

//  	console.log(das + " " + dax)

//  })





var box = document.getElementsByClassName("box");
var boxImg = document.querySelectorAll(".box img")

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
					  if (srcIndex == srcIndex2) {

					  	box[indexArray[indexArray.length-1]].classList.add("winner");
					  	box[indexArray[indexArray.length-2]].classList.add("winner");

						boxImg[indexArray[indexArray.length-1]].classList.add("winner");
						boxImg[indexArray[indexArray.length-2]].classList.add("winner");
				
					  }else {

					  	removeFlip()
					  }

					},100)

				

				x=0;
			}


		
	})
}