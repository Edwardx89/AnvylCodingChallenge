const Athletes = require('./model1.js');
const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost:5432/opensponsorship', {
  logging: false
});
// and our server is created in 'server.js'


const seeder = function(table, data) {
  let promises = []
  data.forEach(question => {
    table.create(question)
      .then(promise => promises.push(promise))
  })
  Promise.all(promises)
}


// const athleteProfile =
// [{firstName: 'Edward', lastName: 'Goo', nationality: 'American', gender: 'Male', birthday:'01/07/1909', email:'ed@yahoo.com', SportId: 4, TeamId: 20},
// {firstName: 'John', lastName: 'Davis', nationality: 'Canadian', gender: 'Male', birthday:'02/07/1929', email:'john@yahoo.com', SportId: 2, TeamId: 10},
// {firstName: 'Apple', lastName: 'Candy', nationality: 'American', gender: 'Female', birthday:'03/27/1979', email:'candy@candy.com',  SportId: 6, TeamId: 4},
// {firstName: 'Samantha', lastName: 'Girl', nationality: 'American', gender: 'Female', birthday:'07/17/1989', email:'sama@sama.com', SportId: 10, TeamId: 14},
// ]



Sports.sync({force:true})
.then(() => seeder(Sports, allSports))
.then(() => console.log('all synced'))
.then(() => require('../../app.js'))
.catch(err => console.log(err))
