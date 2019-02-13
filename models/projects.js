/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('projects', {
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    project_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    project_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    project_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'projects'
  });
};
