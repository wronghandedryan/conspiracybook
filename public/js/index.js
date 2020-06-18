$(document).ready(() => {

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