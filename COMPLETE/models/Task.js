const BaseModel = require('./BaseModel');

class Task extends BaseModel {
  static get tableName() {
    return 'tasks';
  }

  static get relationMappings() {
    const User = require('./User');
    return {
      user: {
        relation: BaseModel.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'tasks.user_id',
          to: 'users.id'
        }
      }
    };
  }
}

module.exports = Task;
