const { Model } = require('objection');
const { v4: uuidv4 } = require('uuid');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  $beforeInsert() {
    this.id = uuidv4();
  }
}

module.exports = User;
