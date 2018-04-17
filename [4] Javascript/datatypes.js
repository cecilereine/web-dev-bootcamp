// -- DATA TYPES -- //

// Number
	var number1 = 35;
	var number2 = 40;

// String
	var string1 = 'string1';
	var string2 = 'string2';

		// camel case
		var myFavoriteNumber;

		// partial case
		var MyFavoriteNumber;

		// underscore
		var my_favorite_number;

		// basic rules on characters: 
		//		letters numbers underscores dollar sign
		// 		_ $
		// 		case sensitive

// Array
	var colors = ['red', 'blue', 'green'];
	var colors2 = new Array('red', 'yellow', 'orange');

	colors.push('purple');


	var numbers = [5, 1, 23, 6, 15, 'Seven'];
	numbers.sort();
	numbers.reverse();


// Object
	
	// Object Literal
	var person = {
		firstName: 'Brad',
		lastName: 'Traversy',
		age: 34
		children: ['Brianna', ' Nichols']
		address: {
			street: '555 Something St',
			city: 'Boston',
			state: 'MA'
		}

		fullName: function() {
			return this.firstName + " " + this.lastName;x
		}

		fullAddress: function() {
			return this.street + " " + this.city + " " + this.state;
		}
	}

	// Object Constructor
	var apple = new Object();
	apple.color = 'red';
	apple.shape = 'round';

	apple.describe = function() {
		return 'An apple is the color ' + this.color;
	}

	// Constructor Pattern
	function Fruit(name, color, shape){
		this.name = name;
		this.color = color;
		this.shape = shape;

		this.describe = function(){
			return 'A ' + this.name + ' this the color ' + this.color + ' and is the shape ' + this.shape;
		}
	}

	var apple = new Fruit('apple', 'red', 'round');
	var melon = new Fruit('melon', 'green', 'round');


	var users = [
		{
			name: 'John Doe';
			age: '22';
		}
		{
			name: 'Jane Doe';
			age: '12';
		}
	];


// Events

