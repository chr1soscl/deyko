/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bugs', {
    bug_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    bug_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    bug_long_description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    release_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'releases',
        key: 'release_id'
      }
    },
    assigned_to: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'app_users',
        key: 'user_id'
      }
    },
    resolved_by: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'app_users',
        key: 'user_id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bug_status',
        key: 'status_id'
      }
    },
    criticality_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'bug_criticality',
        key: 'criticality_id'
      }
    },
    phase_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'phases',
        key: 'phase_id'
      }
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'projects',
        key: 'project_id'
      }
    }
  }, {
    timestamps: false,
    tableName: 'bugs'
  });
};
