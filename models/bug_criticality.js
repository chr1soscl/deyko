/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bug_criticality', {
    criticality_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    criticality_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    criticality_desc: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'bug_criticality'
  });
};
