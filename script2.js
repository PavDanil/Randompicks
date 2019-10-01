jQuery('document').ready(function() {
var abaddon = new Image();
abaddon.src = 'images/abaddon.jpg';
var alchemist = new Image();
alchemist.src = 'images/alchemist.jpg';

var myArray = [abaddon, alchemist];

	jQuery('button').on('click', function(){
var countrand =	$('div').length
var rand = myArray[Math.floor(Math.random() * myArray.length)];
var div = "div";
	if (countrand=1) {
	jQuery('div').replaceWith(rand);}
	else {jQuery('rand').replaceWith(div);}
	
	
	
	
	});





		
}); 