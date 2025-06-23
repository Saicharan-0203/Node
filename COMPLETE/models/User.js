const BaseModel = require('./BaseModel');

class User extends BaseModel {
  static get tableName() {
    return 'users';
  }

  static get relationMappings() {
    const Team = require('./Team');
    const Task = require('./Task');
    return {
      team: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: Team,
        join: {
          from: 'users.team_id',
          to: 'teams.id'
        }
      },
      tasks: {
        relation: BaseModel.HasManyRelation,
        modelClass: Task,
        join: {
          from: 'users.id',
          to: 'tasks.user_id'
        }
      }
    };
  }
}

module.exports = User;
