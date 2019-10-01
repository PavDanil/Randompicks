jQuery('document').ready(function() {

var myArray = [
"images/abaddon.jpg", 
"images/alchemist.jpg", 
"images/ancient-apparition.jpg",
"images/anti-mage.jpg",
"images/arc-warden.jpg",
"images/axe.jpg",
"images/bane.jpg",
"images/batrider.jpg",
"images/beastmaster.jpg",
"images/bloodseeker.jpg",
"images/bounty-hunter.jpg",
"images/brewmaster.jpg",
"images/bristleback.jpg",
"images/broodmother.jpg",
"images/centaur-warrunner.jpg",
"images/chaos-knight.jpg",
"images/chen.jpg",
"images/clinkz.jpg",
"images/clockwerk.jpg",
"images/crystal-maiden.jpg",
"images/dark-seer.jpg",
"images/dark-willow.jpg",
"images/dazzle.jpg",
"images/death-prophet.jpg",
"images/disruptor.jpg",
"images/doom.jpg",
"images/dragon-knight.jpg",
"images/drow-ranger.jpg",
"images/earthshaker.jpg",
"images/earth-spirit.jpg",
"images/elder-titan.jpg",
"images/ember-spirit.jpg",
"images/enchantress.jpg",
"images/enigma.jpg",
"images/faceless-void.jpg",
"images/grimstroke.jpg",
"images/gyrocopter.jpg",
"images/huskar.jpg",
"images/invoker.jpg",
"images/io.jpg",
"images/jakiro.jpg",
"images/juggernaut.jpg",
"images/keeper-of-the-light.jpg",
"images/kunkka.jpg",
"images/legion-commander.jpg",
"images/leshrac.jpg",
"images/lich.jpg",
"images/lifestealer.jpg",
"images/lina.jpg",
"images/lion.jpg",
"images/lone-druid.jpg",
"images/luna.jpg",
"images/lycan.jpg",
"images/magnus.jpg",
"images/mars.jpg",
"images/medusa.jpg",
"images/meepo.jpg",
"images/mirana.jpg",
"images/monkey-king.jpg",
"images/morphling.jpg",
"images/naga-siren.jpg",
"images/natures-prophet.jpg",
"images/necrophos.jpg",
"images/night-stalker.jpg",
"images/nyx-assassin.jpg",
"images/ogre-magi.jpg",
"images/omniknight.jpg",
"images/oracle.jpg",
"images/outworld-devourer.jpg",
"images/pangolier.jpg",
"images/phantom-assassin.jpg",
"images/phantom-lancer.jpg",
"images/phoenix.jpg",
"images/puck.jpg",
"images/pudge.jpg",
"images/pugna.jpg",
"images/queen-of-pain.jpg",
"images/razor.jpg",
"images/riki.jpg",
"images/rubick.jpg",
"images/sand-king.jpg",
"images/shadow-demon.jpg",
"images/shadow-fiend.jpg",
"images/shadow-shaman.jpg",
"images/silencer.jpg",
"images/skywrath-mage.jpg",
"images/slardar.jpg",
"images/slark.jpg",
"images/sniper.jpg",
"images/spectre.jpg",
"images/spirit-breaker.jpg",
"images/storm-spirit.jpg",
"images/sven.jpg",
"images/techies.jpg",
"images/templar-assassin.jpg",
"images/terrorblade.jpg",
"images/tidehunter.jpg",
"images/timbersaw.jpg",
"images/tinker.jpg",
"images/tiny.jpg",
"images/treant-protector.jpg",
"images/troll-warlord.jpg",
"images/tusk.jpg",
"images/underlord.jpg",
"images/undying.jpg",
"images/ursa.jpg",
"images/vengeful-spirit.jpg",
"images/venomancer.jpg",
"images/viper.jpg",
"images/visage.jpg",
"images/warlock.jpg",
"images/weaver.jpg",
"images/windranger.jpg",
"images/winter-wyvern.jpg",
"images/witch-doctor.jpg",
"images/wraith-king.jpg",
"images/zeus.jpg",

];

	jQuery('button').on('click', function()
{
var rand = myArray[Math.floor(Math.random() * myArray.length)];
var rand2 = myArray[Math.floor(Math.random() * myArray.length)];
var rand3 = myArray[Math.floor(Math.random() * myArray.length)];
var rand4 = myArray[Math.floor(Math.random() * myArray.length)];
var rand5 = myArray[Math.floor(Math.random() * myArray.length)];
	
	jQuery("#hero1").attr("src", rand);
		while (rand==rand2) 
		{rand2 = myArray[Math.floor(Math.random() * myArray.length)];};
	jQuery("#hero2").attr("src", rand2);
		while ((rand==rand3) || (rand2==rand3))
		{rand3 = myArray[Math.floor(Math.random() * myArray.length)];};
	jQuery("#hero3").attr("src", rand3);
		while ((rand==rand4) || (rand2==rand4) || (rand3==rand4)) 
		{rand4 = myArray[Math.floor(Math.random() * myArray.length)];};
	jQuery("#hero4").attr("src", rand4);
		while ((rand==rand5) || (rand2==rand5) || (rand3==rand5)|| (rand4==rand5)) 
		{rand5 = myArray[Math.floor(Math.random() * myArray.length)];};
	jQuery("#hero5").attr("src", rand5);
	});





		
}); 