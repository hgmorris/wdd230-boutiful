function signUp() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // Create user
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(function(user) {
        console.log("User created:", user);
        // Save user data to the database
        saveUserProfile(user.uid, {email: email});
        // Redirect to profile page or dashboard
      })
      .catch(function(error) {
        console.error("Error creating user:", error);
      });
  }
  
  // Log in user
  function logIn() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    // Log in user
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
        console.log("User logged in:", user);
        // Redirect to profile page or dashboard
      })
      .catch(function(error) {
        console.error("Error logging in user:", error);
      });
  }
  
  
    // Log out user
    function logOut() {
      firebase.auth().signOut()
        .then(function() {
          console.log("User logged out.");
          // Redirect to home page
        })
        .catch(function(error) {
          console.error("Error logging out:", error);
        });
    }