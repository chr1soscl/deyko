/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('months', {
    month_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    month_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    month_short_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'months'
  });
};
