console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!
function showWelcomeMessage(userName, userRole) {
  const result = `Welcome ${userName}! You are logged in now as ${userRole}.`;
  console.log(result);
}
function errorMessage(errorMessage) {
  const result = `Login error: ${errorMessage}`;
  console.log(result);
}
handleUserLogin(showWelcomeMessage, errorMessage, "Jane Doe");
handleUserLogin(showWelcomeMessage, errorMessage, "John Doe");
