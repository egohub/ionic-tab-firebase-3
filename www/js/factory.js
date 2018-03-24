angular.module('starter.services', [])

/***************************************************************************************
 * FACTORY
 **************************************************************************************/

.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
])

.factory("Firebase", function() {
  var config = {
    apiKey: "AIzaSyDwxog6Ch1zIHUZrOvfPFDargXD1g7Hfwc",
    authDomain: "livesoccer-myanmar-e5626.firebaseapp.com",
    databaseURL: "https://livesoccer-myanmar-e5626.firebaseio.com",
    projectId: "livesoccer-myanmar-e5626",
    storageBucket: "livesoccer-myanmar-e5626.appspot.com",
    messagingSenderId: "388233726671"
  };
 
  return firebase.initializeApp(config);
});

