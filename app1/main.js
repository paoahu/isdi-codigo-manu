

// register
var changeEmailView = document.getElementById("changeEmail").style.display = "none"


var registerView = document.getElementById("register");
registerView.style.display = "none";

var registerLoginLink = registerView.querySelector("a");
registerLoginLink.onclick = function (event) {
  event.preventDefault();
  registerView.style.display = "none";
  loginView.style.display = "block";
};
var registerForm = registerView.querySelector("form");
registerForm.onsubmit = function (event) {
  event.preventDefault();
  var nameInput = registerForm.querySelector("#name");
  var emailInput = registerForm.querySelector("#email");
  var passwordInput = registerForm.querySelector("#password");
  var name = nameInput.value;
  var email = emailInput.value;
  var password = passwordInput.value;
  try {
    registerUser(name, email, password);
    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    registerView.style.display = "none";
    loginView.style.display = "block";
  } catch (error) {
    alert(error.message);
  }
};

// login

var loginView = document.getElementById("login");
var loginRegisterLink = loginView.querySelector("a");


loginRegisterLink.onclick = function (event) {
  event.preventDefault();
  loginView.style.display = "none";
  homeView.style.display = "none";
  registerView.style.display = "block";
};
var loginForm = loginView.querySelector("form");
loginForm.onsubmit = function (event) {
  event.preventDefault();

  var emailInput = loginForm.querySelector("#email");
  var passwordInput = loginForm.querySelector("#password");

  var email = emailInput.value;
  var password = passwordInput.value;

  try {
    authenticateUser(email, password);
    index1 = findUserId(email);
    emailInput.value = "";
    passwordInput.value = "";
    var homeTitle = homeView.querySelector("h1");
    var user = retrieveUser(email);
    homeTitle.innerText = "Hello, " + user.name + "!";
    loginView.style.display = "none";
    homeView.style.display = "block";
  } catch (error) {
    alert(error.message);
  }
};

// home
var homeView = document.getElementById("home");
homeView.style.display = "none";
var changeEmailView2 = document.getElementById("changeEmail");
changeEmailView2.style.display ='none'




var logoutButton = document.querySelector(".logOut-button");
var changeEmailButton = document.querySelector(".changeEmail-button");
var changePasswordButton = document.querySelector(".changePassword-button");


logoutButton.addEventListener("click", () => {
  homeView.style.display = "none";
  loginView.style.display = "block";
})

  changeEmailButton.addEventListener("click", () => {
    homeView.style.display = "none";
    changeEmailView2.style.display = "block"
})




// change email


var mailForm = changeEmailView2.querySelector("form");
mailForm.onsubmit = function (event) {

  event.preventDefault();

  var currentEmailInput = mailForm.querySelector("#currentEmail");
  var newEmailInput = mailForm.querySelector("#newEmail");
  
  var currentEmail = currentEmailInput.value;
  var newEmail = newEmailInput.value;


  try {
    retrieveUser(currentEmail);
    index2 = findUserId(currentEmail);
    isEqual(index1,index2);
    changeEmail (users, currentEmail, newEmail);
    alert(`ha funcionado`)
  } catch (error) {
    alert(error.message);
  }
};

/*
var cancelButton = document.querySelector(".cancelChangeEmail");

cancelButton.addEventListener("click", () => {
  changeEmailView2.style.display = "none"
  loginView.style.display = "none";
  homeView.style.display = "block";
})
*/

