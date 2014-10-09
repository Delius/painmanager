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
	

	App.Models.Task = Backbone.Model.extend({});
	App.Collections.Tasks = Backbone.Collection.extend({
		model: Tasks
	});


	App.Views.Task = Backbone.View.extend({
		tagName: 'li',

		render: function() {
			this.$el.html(this.model.get('title'));
			return this;
		}
	});


	var tasks = new App.Collections.Tasks([
	{
		title: 'Go to the Store',
		priority: 4
	},
	{
		title: 'Go to the mall',
		priority: 2
	},
	{
		title: 'Go to work',
		priority: 5
	}

	]);





})();