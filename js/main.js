(function() {

    window.App = {
        Models: {},
        Collections: {},
        Views: {},
        Router: {}
    };




    App.Router = Backbone.Router.extend({
        routes: {
            '': 'index',
            'show': 'show'
        },

        index: function(){
            console.log('hi from the index page')
        }


    });

    new App.Router;
    Backbone.history.start();

})();