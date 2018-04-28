// Implement the Person class in Person.js. A Person should have these characteristics:

// - A property "name" which is a string passed in through the constructor
// - A property "health" which is hardcoded to 100 initially
// - A property "weapon" which is null initially
// - A method equipWeapon(weapon), which will take a weapon object and attach it to the "weapon" property
// - A method attack(person), which will deduct health from the target based on what 
// weapon this person has equipped


class Person {
	constructor(name, health, weapon) {
		this.name = name;
		this.health = 100;
		this.weapon = null;
	}

	equipWeapon(weapon) {
		this.weapon = weapon;
	}

	render() {
		$(this.selector).html(`
			<img src="${this.imageURL}"/>
			<span>${this.health}</span>
			`);
	}

	attack(person) {
		if (!person) {
			console.log('You forgot to pass in a person');
			return;
		} 

		if (this.weapon == null) {
			console.log("You forgot to equip a weapon");
			return;
		}


		person.health -= this.weapon.damage;
		person.render();
	}

}

