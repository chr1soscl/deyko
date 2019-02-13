/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bug_status', {
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    status_name_desc: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'bug_status'
  });
};
