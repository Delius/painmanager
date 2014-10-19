@Demo.module "Entities", (Entities, App, Backbone, Marionette, $, _) ->
	
	class Entities.Header extends Entities.Model
	
	class Entities.HeaderCollection extends Entities.Collection
		model: Entities.Header
	
	API =
		getHeaders: ->
			new Entities.HeaderCollection [
				{ name: "Users", url: Routes.users_path() }
				{ name: "Pain Records", url: Routes.leads_path() }
				{ name: "Tips", url: "appointments" }
			]
	
	App.reqres.addHandler "header:entities", ->
		API.getHeaders()