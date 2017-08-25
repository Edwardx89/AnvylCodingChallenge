const Sequelize = require('sequelize');
let Athletes = require('./athletes.js')

const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/opensponsorship', {
  logging: false
});

const About = db.define('About', {
  description: {
    type: Sequelize.TEXT,
  },
  location: {
    type: Sequelize.TEXT
  },
})

About.belongsTo(Athletes);
module.exports = About
