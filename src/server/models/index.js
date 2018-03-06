const Sequelize = require('sequelize')
const fs = require('fs')
const { join, basename } = require('path')

const database = 'bonappetit'
const username = 'fcerdas'
const password = 'asp128'
const config = {
  dialect: 'postgres',
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
  },
}

const fileName = basename(module.filename)

let sequelize
const db = {}

if (!sequelize) {
  sequelize = new Sequelize(database, username, password, config)
}

fs
  .readdirSync(__dirname)
  .filter(
    file =>
      file.indexOf('.') > -1 && file !== fileName && file.slice(-3) === '.js'
  )
  .forEach(file => {
    const model = sequelize.import(join(__dirname, file))
    db[model.name] = model
  })

sequelize.authenticate()
sequelize.sync()

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
