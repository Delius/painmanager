class Painmanager.Routers.Entries extends Backbone.Router

 routes:
  '': 'index'
  'entries/:id': 'show'
  
 initialize: ->
  @collection = new Painmanager.Collections.Entries()
  @collection.fetch()


 index: ->
  view = new Painmanager.Views.EntriesIndex(collection: @collection )
  $('#container').html(view.render().el)

 show: (id) ->
  alert "Entry #{id}"
