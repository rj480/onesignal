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
    .startInit("934a3287-1eaa-4e59-a287-e50efb3a0b7a")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
});

