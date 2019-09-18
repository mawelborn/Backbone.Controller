/*! Backbone.Controller.js 1.1.0 | (c) Michael Welborn | Backbone.Controller is MIT licensed */
(function(root, factory) {
    "use strict";
    if (typeof define === "function" && define.amd)
        define(["underscore", "backbone"], factory);
    else if (typeof exports !== "undefined")
        factory(require("underscore"), require("backbone"));
    else
        factory(root._, root.Backbone);
})(typeof self !== "undefined" ? self : this, function(_, Backbone) {
    "use strict";

    Backbone.Controller = function(options) {
        options || (options = {});
        this.initialize.apply(this, arguments);
    };

    _.extend(Backbone.Controller.prototype, Backbone.Events, {
        initialize: function() {},

        terminate: function() {
            this.trigger("terminate");
            this.stopListening();
        }
    });

    Backbone.Controller.extend = Backbone.Router.extend;
});
