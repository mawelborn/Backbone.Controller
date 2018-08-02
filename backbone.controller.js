(function() {
    "use strict";

    Backbone.Controller = function(options) {
        options || (options = {});
        this.initialize.apply(this, arguments);
    };

    _.extend(Backbone.Controller.prototype, Backbone.Events, {
        initialize: function() {},
        terminate: function() { this.stopListening(); }
    });

    Backbone.Controller.extend = Backbone.Router.extend;
}());
