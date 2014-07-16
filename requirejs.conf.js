require.config({
  paths: {
    jquery: 'lib/jquery/jquery',
    jasmine: 'lib/jasmine/lib/jasmine-core/jasmine',
    'jasmine-html': 'lib/jasmine/lib/jasmine-core/jasmine-html',
    'jasmine-jquery': 'lib/jasmine-jquery/lib/jasmine-jquery',
    inherits: 'lib/inherits/inherits',
    blanket: 'lib/blanket/dist/qunit/blanket',
    'blanket-jasmine': 'lib/blanket/dist/jasmine/blanket_jasmine',
    debug: 'lib/debug/debug'
  },
  packages: [{
    name: "livefyre-bootstrap",
    location: "lib/livefyre-bootstrap/src"
  },{
    name: "streamhub-share",
    location: "src",
    main: "share-button"
  },{
    name: "streamhub-ui",
    location: "lib/streamhub-ui/src"
  },{
    name: "view",
    location: "lib/view/src",
    main: "view"
  }],
  shim: {
    jquery: {
        exports: '$'
    },
    jasmine: {
        exports: 'jasmine'
    },
    'jasmine-html': {
        deps: ['jasmine'],
        exports: 'jasmine'
    },
    'blanket-jasmine': {
        exports: 'blanket',
        deps: ['jasmine']
    },
    'jasmine-jquery': {
        deps: ['jquery']
    }
  }
});
