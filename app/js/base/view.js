define(function (require) {
    var Backbone = require("backbone");
    var _ = require("underscore");
    var mustache = require("mustache");

    var SubViewHandler = require("component/subViewHandler");

    /* Backbone View Extension */
    var BaseView = Backbone.View.extend({
        constructor: function(options) {

            var subViewHandler = new SubViewHandler();
            _.extend(this, subViewHandler);

            Backbone.View.prototype.constructor.apply(this, arguments);
        },

        destroy:function () {

            // Unbind all events that are bound to the view, i.e.
            // those bound with `this.on`
            this.off();

            // Remove the view from the DOM
            this.remove();

            // Recursively destroy all subviews
            this.destroySubViews();
        },

        parseTemplate: function() {
            return mustache.render(template, data);
        },

        /**
         * Renders the template for the view.
         * Can be called with renderTemplate(template, data), renderTemplate(data) or renderTemplate(template).
         * If the method is called with only 'data', it expects 'this.template' to contain the template.
         */
        renderTemplate: function(template, data) {
            this.$el.html(this.parseTemplate(template, data));
        },

        show: function() {
            this.$el.show();
        },

        hide: function() {
            this.$el.hide();
        }

    });

    return BaseView;

});