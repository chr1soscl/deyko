/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('releases', {
    release_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    release_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    release_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    release_type_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'release_type',
        key: 'release_type_id'
      }
    },
    year_name: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    month_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'months',
        key: 'month_id'
      }
    },
    active: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    timestamps: false,
    tableName: 'releases'
  });
};
