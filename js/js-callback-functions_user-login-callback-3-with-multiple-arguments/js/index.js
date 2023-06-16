console.clear();

function handleUserLogin(onSuccess) {
  onSuccess("Jane Doe", "admin");
}
function showWelcomeMessage(userName, userRole) {
  const result = `Welcome ${userName}! You are logged in now as ${userRole}.`;
  console.log(result);
}
// The exercise starts here!
handleUserLogin(showWelcomeMessage);
handleUserLogin((userName, userRole) => {
  const result = `Welcome ${userName}! You are logged in now as ${userRole}.`;
  console.log(result);
});
