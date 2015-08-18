requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'lodash': '../bower_components/lodash/lodash.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs',
    'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap.min',
    'q': '../bower_components/q/q',
    'matchHeight': '../bower_components/matchHeight/jquery.matchHeight-min'
  },
  shim: {
    'bootstrap': ['jquery'],
    'matchHeight': ['jquery'],
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(["delete", "add"], function(remove, add){
  
});