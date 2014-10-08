class Painmanager.Views.EntriesIndex extends Backbone.View

  template: JST['entries/index']

  events:
   'submit #new_entry': 'createEntry'

  initialize: ->
   @collection.on('reset', @render, this)
   @collection.on('add', @render, this)

  render: ->
   $(@el).html(@template(entries: @collection))
   this

  createEntry: (event) ->
   event.preventDefault()
   @collection.create paintype: $('#new_entry_paintype').val()