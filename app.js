(function(Simple) {

  BEKK.User = Simple.Model.extend({
      initialize: function(options) {
          if (options && options.screen_name) {
            this.name = options.screen_name;
            this.url = "https://api.twitter.com/1/users/show.json?screen_name=" + this.name + "&include_entities=true";
          }
      }
  });

  BEKK.UserView = Simple.View.extend({

    template: '<div><h1 class="name">Hei {{name}}!</h1></div>',

    initialize: function(options) {
        this.user = options.user;
    },

    render: function() {
        var data;

        if (this.user instanceof Simple.Model) {
            data = this.user.toJSON();
        } else {
            data = this.user;
        }

        this.el.html(Mustache.to_html(this.template, data));
    }
  });

})(window.Simple);
