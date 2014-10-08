//Person Model

var Person = Backbone.Model.extend({
	defaults: {
		name: 'John',
		age: 30,
		occupation: 'worker'
	}
});

//A list of People

var PeopleCollection = Backbone.Collection.extend({
	model: Person
});

//View for Person

var PersonView = Backbone.View.extend({
	tagName: 'li',

	template: _.template($('#personTemplate').html()),
	
	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html( this.template(this.model.toJSON()));
	}
});

var person = new Person;



var peopleCollection = new PeopleCollection([

{
	name: 'Jeff',
	age: 21

},

{
	name: 'John',
	age: 23

},

{
	name: 'Jane',
	age: 23

}
	]);




console.log(peopleCollection);