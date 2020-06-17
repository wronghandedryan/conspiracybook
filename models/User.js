module.exports = (sequelize, type) => {
    const User = sequelize.define('User', {
        username: {
            type: type.STRING
        },
        firstName: {
            type: type.STRING
        },
        lastName: {
            type: type.STRING
        },
        email: {
            type: type.STRING
        },
        passwordHash: {
            type: type.STRING
        },
        registeredAt: {
            type: type.DATE,
            defaultValue: type.NOW
        },
        lastLogin: {
             type: type.STRING,
         },
        intro: {
              type: type.STRING,
          },
        profile: {
                type: type.STRING,
        },
    })

    User.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        User.hasMany(models.Post, {
            foreignKey: "userId",
            onDelete: "CASCADE",
        });
      };

      return User;
}  