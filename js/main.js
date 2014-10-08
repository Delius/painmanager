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

//View for all People

var PeopleView = Backbone.View.extend({
	tagName: 'ul',

	render:function() {
		this.collection.each(function(person) {
			var personView = new PersonView({ model: person});
			this.$el.append(personView.render().el);
		}, this);


	}


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
		return this;
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




var peopleView = new PeopleView( { collection: peopleCollection } );