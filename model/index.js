const Sequelize = require("Sequelize");
const config = require("../config/config.json")["devalopment"];

const db = {};
const sequelize = new Sequelize(
    // DB, user(name), pw, DB 정보
    config.database,
    config.username,
    config.password,
    config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = require("./User")(sequelize, Sequelize);


module.exports = db