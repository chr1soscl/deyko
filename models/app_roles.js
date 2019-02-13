/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_roles', {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'app_roles'
  });
};
