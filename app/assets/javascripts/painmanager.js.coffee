window.Painmanager =
  Models: {}
  Collections: {}
  Views: {}
  Routers: {}
  initialize: -> 
   new Painmanager.Routers.Entries()
   Backbone.history.start()

$(document).ready ->
  Painmanager.initialize()
