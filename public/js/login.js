//login with jqeury and ajax
//signup with jquwery and ajax
let createAccount = () => {
  event.preventDefault();
  console.log("clickeds!");
  let username = $("#username").val().trim();
  let firstName = $("#fname").val().trim();
  let lastName = $("#lname").val().trim();
  let email = $("#email").val().trim();
  let password = $("#password").val();

  addUser({
    username,
    firstName,
    lastName,
    email,
    password,
  });
};

let addUser = (userData) => {
  $.post("/user/register", userData);
};

$("#createAccount").on("click", createAccount);
$("#loginBtn").on("click", () => {
  $.post("/user/login", {
    username: $("#usernameForm").val().trim(),
    password: $("#passForm").val().trim(),
  }).then(data=> data.username? (localStorage.setItem("currentUser", JSON.stringify(data)), location.replace('/member')) : alert(data))
});
