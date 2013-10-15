/**
 * Handles the lifecycle of subviews - extends baseView and is called on destroy() to clean up/remove subviews when their parent
 * is destroyed.
 */
define(function(require) {
    var _ = require("underscore");

    var SubViewHandler = function() {
        this.subViews = [];
    };

    _.extend(SubViewHandler.prototype, {

        addSubView: function(subView) {
            if(_.isUndefined(subView)) {
                throw "Subview can't be undefined";
            }

            if (!_.contains(this.subViews, subView)) {
                this.subViews.push(subView);
            }
        },

        destroySubViews: function() {
            _.invoke(this.subViews, 'destroy');
            this.subViews.length = 0;
        }
    });

    return SubViewHandler;

});
