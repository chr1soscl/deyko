/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('phases', {
    phase_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    phase_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    phase_desc: {
      type: DataTypes.STRING,
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'phases'
  });
};
