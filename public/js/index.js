$(document).ready(() => {
    const user = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null;
    
    function createProfile(username) {
      User.findAll({
        where: {
          username: username
        }
      }).then((res) => {
        let name = res.name;
        let location = res.location;

        $('#userName').text("Name: " + name)
        $('#itemLocation').text("Location: " + location)
        
      })
    };

    
    });