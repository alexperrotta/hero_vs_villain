// Implement the Hero class in Hero.js. A Hero should have these characteristics:

// - A Hero should be a subclass of Person (hint: use "extends", and don't forget to use super() 
// 	in the constructor)
// - A method render() which will output HTML that represents the Hero
//    - You can render a simple <img> tag if you'd like! Find any old "hero" image on google
//    - Make sure to show the "health" of the hero too


class Hero extends Person {
	constructor() {
		super();
	}
}

render() {
	let html = `<img src="./img/hero.js"/>`;
}