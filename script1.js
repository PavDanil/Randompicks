jQuery('document').ready(function() {
var myArray = ['a', 'b', 'c', 'd','e', 'f', 'g', 'p'];
var rand = myArray[Math.floor(Math.random() * myArray.length)];
var rand2 = myArray[Math.floor(Math.random() * myArray.length)];
var rand3 = myArray[Math.floor(Math.random() * myArray.length)];
var rand4 = myArray[Math.floor(Math.random() * myArray.length)];
var rand5 = myArray[Math.floor(Math.random() * myArray.length)];
	jQuery('body').append(rand);
		while (rand==rand2) 
		{
		rand2 = myArray[Math.floor(Math.random() * myArray.length)];
		};
	jQuery('body').append(rand2);
		while ((rand==rand3) || (rand2==rand3))
		{
		rand3 = myArray[Math.floor(Math.random() * myArray.length)];
		};
	jQuery('body').append(rand3);
		while ((rand==rand4) || (rand2==rand4) || (rand3==rand4)) 
		{
		rand4 = myArray[Math.floor(Math.random() * myArray.length)];
		};
	jQuery('body').append(rand4);
		while ((rand==rand5) || (rand2==rand5) || (rand3==rand5)|| (rand4==rand5)) 
		{
		rand5 = myArray[Math.floor(Math.random() * myArray.length)];
		};
	jQuery('body').append(rand5);
}); 