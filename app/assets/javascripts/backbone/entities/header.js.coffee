@Demo.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->
	
	class Entities.Header extends Entities.Model
	
	class Entities.HeaderCollection extends Entities.Collection
		model: Entities.Header
	
	API =
		getHeaders: ->
			new Entities.HeaderCollection [
				{ name: "Users" }
				{ name: "Pain Records" }
				{ name: "Appointments" }
			]
	
	App.reqres.addHandler "header:entities", ->
		API.getHeaders()