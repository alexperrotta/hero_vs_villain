// Time to tie all of your classes together! script.js is going to control the gameplay itself:

// - When the page loads, prompt the user for the name of the Hero and the name of the Villain
// - Create a new Hero and a new Villain, render them to the screen
// - Create two new Weapons, and have the Hero and Villain each equip one
// - Provide two buttons on the screen: one that will let the Hero attack the Villain and 
// another button that will let the Villain attack the Hero
// - When the Hero's health goes below 1, show "Game over"
// - When the Villain's health goes below 1, show "Victory!"


$(function(){

	let hero = new Hero('adam');
	let villain = new Villain('joker');
	hero.render();
	villain.render();


	let herosWeapon = new Weapon('Sythe');
	let villainsWeapon = new Weapon('Gun');


	hero.equipWeapon(herosWeapon);
	villain.equipWeapon(villainsWeapon);

	function checkForGameOver() {
		if (villain.health < 1) {
			alert('Victory!')
		} else if (hero.health < 1) {
			alert('Game over!')
		}
	}

	$('#heroAttack').click( e => {
		hero.attack(villain);
		checkForGameOver();
	});

	$('#villainAttack').click( e => {
		villain.attack(hero);
		checkForGameOver();
	});


});