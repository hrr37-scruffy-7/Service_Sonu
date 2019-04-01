let {Frbo} = require('./schema');
let {generateSeeding} = require('./seeding');

Frbo.deleteMany().then(() => {
  console.log(`deleted`)
  return Frbo.create(generateSeeding())
}).then(data => {
  console.log(`Everything is inserted`)
}).catch(err => {console.log(err)})