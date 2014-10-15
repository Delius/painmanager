@Demo.module "HeaderApp.List", (List, App, Backbone, Marionette, $,_) ->

  List.Controller =

    listHeader: ->
      headerView = @getHeaderView()

#      insert ths view in to header region
      App.headerRegion.show headerView


    getHeaderView: ->
      new List.Header