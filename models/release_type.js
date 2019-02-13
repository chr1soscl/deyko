/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('release_type', {
    release_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    release_type_name: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'release_type'
  });
};
