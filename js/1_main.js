(function() {

	window.App = {
		Models: {},
		Collections: {},
		Views: {}
	};


//Helper method for template
	window.template = function(id) {
		return _.template( $('#' + id).html() );
	};



//Person Model

App.Models.Person = Backbone.Model.extend({
	defaults: {
		name: 'John',
		age: 30,
		occupation: 'worker'
	}
});

//A list of People

App.Collections.People = Backbone.Collection.extend({
	model: App.Models.Person
});

//View for all People

App.Views.People = Backbone.View.extend({
	tagName: 'ul',

	render:function() {
		this.collection.each(function(person) {
			var personView = new App.Views.Person({ model: person});
			this.$el.append(personView.render().el);
		}, this);

		return this;

	}


});

//View for Person

App.Views.Person = Backbone.View.extend({
	tagName: 'li',

	template: template('personTemplate'),
	
	initialize: function() {
		this.render();
	},

	render: function() {
		this.$el.html( this.template(this.model.toJSON()));
		return this;
	}
});



var peopleCollection = new App.Collections.People([

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




var peopleView = new App.Views.People( { collection: peopleCollection } );
$(document.body).append(peopleView.render().el);

})();
