
module.exports = function(sequelize, DataTypes) {
  // Define the Burger Sequelize model
  var Burger = sequelize.define("Burger", 
    {
      // Name is the actual burger
      burger_name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      // whether or not the burger has been devoured
      devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
  }
  });

  return Burger;
};