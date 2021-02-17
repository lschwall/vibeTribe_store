const { Data } = require("@react-google-maps/api");

module.exports = (sequelize, DataTypes) => {
    const Temp= sequelize.define('examples', {
        fill_me_in : {
            type: DataTypes.STRING,
        }
    }, {
      freezeTableName: true,
    });
  
    return Temp;
  };