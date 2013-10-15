(function(Backbone) {

    window.App.TodoView = Backbone.View.extend({
        status : 'Not done',

        events : {
            'change input[type=checkbox]' : 'checkboxClicked',
            'click input[type=button]' : 'buttonClicked'
        },

        initialize : function(){
            this.listenTo(this.collection, 'remove', this.render, this);
        },

        render: function() {
            var htmlArray = _.map(this.collection.models, function  (model) {
                return "<li data-cid='"+model.cid+"'>"+
                        "<input type='checkbox'"+ (model.get("done") ? "checked" : "") +">" +
                            model.get("name") + 
                            "<input type='button' value='done'>" +
                        "</li>";
            });

            this.$el.html("<h1>"+this.status+"</h1></br>"+htmlArray.join(""));
        },

        checkboxClicked : function(event){
            var $target = $(event.currentTarget).parent();
            var cid = $target.data("cid");

            var model = this.collection.get(cid);
            model.set("done", $target.prop("checked"));
        },

        buttonClicked : function(event){
            var $target = $(event.currentTarget).parent();
            var cid = $target.data("cid");

            var model = this.collection.get(cid);
            this.collection.remove(model);
        }

    });

})(Backbone);

