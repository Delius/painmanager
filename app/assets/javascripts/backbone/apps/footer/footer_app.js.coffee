@Demo.module "FooterApp", (FooterApp, App, Backbone, Marionette, $, _) ->
  this.startWithParent = false

  API =
    showFooter: ->
      FooterApp.Show.Controller.showFooter()

  FooterApp.on "start", ->
    API.showFooter()