//login with jqeury and ajax
//signup with jquwery and ajax
let createAccount = () => {
    event.preventDefault();
  
    let username = $('#createUsername').val().trim();
    let firstName = $('#firstName').val().trim();
    let lastName = $('#lastName').val().trim();
    let email = $('#lastName').val().trim();
    let password = $('#createPassword').val();
  
    addUser({
      username: username,
      firstName: firstName,
      lastName: lastName,
      email:  email,
      password: password,
    });

  }
  
  let addUser = (userData) => {
    $.post('/create-account', userData);
  }
  
  $('#createAccount').on('click', createAccount);