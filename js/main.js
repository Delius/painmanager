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
		model: App.Models.Task
	});

	App.Views.Tasks = Backbone.View.extend({
		tagName: 'ul',

		render: function() {
			this.collection.each(this.addOne, this);
			return this;
		},

		addOne: function(task) {
			//creating a new child view
			var taskView = new App.Views.Task({model: task});
			//append to the root element
			this.$el.append(taskView.render().el);
		}
	});


	App.Views.Task = Backbone.View.extend({
		tagName: 'li',

		template: template('taskTemplate' ),
		
				events: {
					
				},
		


		render: function() {
			var template = this.template(this.model.toJSON() );
			this.$el.html(template);
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


	var taskView = new App.Views.Tasks({ collection: tasks});

	//console.log(taskView.el);
	$('.tasks').html(taskView.render().el);

})();