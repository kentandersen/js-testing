(function(Backbone) {

  var App = window.App = {};

  App.start = function() {
    // kalles av main.js
    // her kan vi (etterhvert) starte applikasjonen

    var TodoCollections = new window.App.TodoCollection([
      {
        name: "vakse gulv"
      }, {
        name: "bære ved"
      }, {
        name: "henge opp fugleband"
      }, {
        name: "skrive backbone foredrag"
      }
    ]);

    var todoview = new App.TodoView({
      collection: TodoCollections,
      el: "#todos"
    });

    todoview.render();


    console.log('App is done!');

  };

})(Backbone);
