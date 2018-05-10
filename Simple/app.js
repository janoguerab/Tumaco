// Get a reference to the database service
var database = firebase.database();
// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

var uiConfig = {
  callbacks: {
    signInSuccess: function(currentUser, credential, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      console.log('INICIADO');

      return true;
    },
    uiShown: function() {
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'formulario.html',
  signInOptions: [
    // Leave the lines as is for the providers you want to offer your users.
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>'
};
// The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);
