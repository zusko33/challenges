console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe");
}
function showWelcomeMessage(userName) {
  console.log("Welcome " + userName + "You are logged in now.");
}
// The exercise starts here!
handleUserLogin(showWelcomeMessage);
handleUserLogin((userName) => {
  console.log("Welcome " + userName + "You are logged in now.");
});
