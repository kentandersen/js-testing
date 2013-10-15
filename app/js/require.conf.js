requirejs.config({
    paths: {
        "backbone":             "vendor/backbone",
        "jquery":               "vendor/jquery-2.0.3",
        "mustache":             "vendor/jquery-0.7.2",
        "underscore":           "vendor/underscore"
    },

    shim: {
        "jquery": {
            exports: "jQuery"
        },
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },
        "mustache": {
            exports: "Mustache"
        }
    }
});