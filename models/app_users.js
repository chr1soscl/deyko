/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('app_users', {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_login: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_first_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_last_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    user_role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'app_roles',
        key: 'role_id'
      }
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'app_users'
  });
};
