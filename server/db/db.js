const Sequelize = require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/INSERT_YOUR_PG-DB_NAME', {
  logging: false
})

module.exports = db
