(function(Backbone) {


    window.App.TodoModel = Backbone.Model.extend({

        defaults: {
            "name": "",
            "done": false
        },

        initialize: function(){
            
        }


    });

})(Backbone);