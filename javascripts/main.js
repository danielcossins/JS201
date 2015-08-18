requirejs.config({
  baseUrl: './javascripts',
  paths: {
    'jquery': '../bower_components/jquery/dist/jquery.min',
    'firebase': '../bower_components/firebase/firebase',
    'hbs': '../bower_components/require-handlebars-plugin/hbs'
  },
  shim: {
    'firebase': {
      exports: 'Firebase'
    }
  }
});

require(["jquery", "firebase", "hbs", "delete", "add"],
  function($, _firebase, Handlebars, remove, add){
  var firebaseRef = new Firebase("https://daniel-family.firebaseio.com/");
  firebaseRef.child("family").on("value", function(family){
    var members = family.val();
    console.log(members);



    require(["hbs!../templates/populate"], function(temp){
      $('#family').html(temp(members));
    });

    
  });
});