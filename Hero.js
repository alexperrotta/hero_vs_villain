// Implement the Hero class in Hero.js. A Hero should have these characteristics:

// - A Hero should be a subclass of Person 
// - A method render() which will output HTML that represents the Hero
//    - You can render a simple <img> tag if you'd like! Find any old "hero" image on google
//    - Make sure to show the "health" of the hero too


class Hero extends Person {
	
	constructor(name) {
		super(name);
		this.imageURL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0quZ0jhqHjKEnrgaxDrJcmLOID3KNyyCSyCFRWsaaoIuGmpjX';
		this.selector = '.hero';
	}

	

}