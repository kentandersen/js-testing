(function(Backbone) {

    window.App.TodoCollection = Backbone.Collection.extend({

        models: window.App.TodoModel

    });

})(Backbone);

