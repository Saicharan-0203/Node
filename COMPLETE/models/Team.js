const BaseModel = require('./BaseModel');

class Team extends BaseModel {
  static get tableName() {
    return 'teams';
  }

  static get relationMappings() {
    const User = require('./User');
    return {
      users: {
        relation: BaseModel.HasManyRelation,
        modelClass: User,
        join: {
          from: 'teams.id',
          to: 'users.team_id'
        }
      }
    };
  }
}

module.exports = Team;
