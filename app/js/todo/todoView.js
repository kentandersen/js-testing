(function(Backbone) {

    window.App.TodoView = Backbone.View.extend({


        render: function() {
            var htmlArray = _.map(this.collection.models, function  (model) {
                return "<li>" + model.get("name") + "</li>";
            });

            this.$el.html(htmlArray.join(""));
        }

    });

})(Backbone);

