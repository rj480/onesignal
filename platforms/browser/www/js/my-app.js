// Initialize app
var myApp = new Framework7({
    material:true,
    swipePanel:'both',
   
});



// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    dynamicNavbar: true
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function() {
    console.log("Device is ready!");

    var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("49d41240-3ac8-4b46-a225-32d0a60c5c29")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
});

