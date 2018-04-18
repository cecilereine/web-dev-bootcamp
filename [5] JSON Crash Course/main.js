var person = {
	name: "Brad",
	age: 35,
	address: {
		street: "5 main st",
		city: "Boston"
	},
	children: ["Brianna", "Nicholas"]
}

var people = [ 
	{
		name: "Brad",
		age: 35
	},

	{
		name: "John",
		age: 40
	},

	{
		name: "Sara",
		age: 25
	}
];

var output = '';

for(var i = 0; i < people.length; i++) {
	output += '<li>' + people[i].name + '</li>';
}

document.getElementById('people').innerHTML = output;