// Implement the Villain class in Villain.js. A Villain should have these characteristics:

// - A Villain should be a subclass of Person (hint: use "extend", and don't forget to use super() 
// 	in the constructor)
// - A method render() which will output HTML that represents the Villain
//    - You can render a simple <img> tag if you'd like! Find any old "villain" image on google
//    - Make sure to show the "health" of the villain too



class Villain extends Person {
	
	constructor(name) {
		super(name);
		this.imageURL = 'http://lenwilson.us/wp-content/uploads/2014/05/krazy-glue.jpg';
		this.selector = '.villain';
	}

	

}