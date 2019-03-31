let express = require('express');
let app = express();
let path = require('path');
let PORT = process.env.PORT || 5003;
let {Frbo} = require('./models/schema');


app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

app.get('/properties/:id', (req, res) => {
  console.log(req.params.id)
  Frbo.findOne({property_id: req.params.id}).then(doc => {
    console.log(doc, '******* server.js')
    if (doc != null) {
      res.send(doc)
    } else {
      res.send('Not found')
    }
  }).catch(err => {console.log(err)})
})



app.listen(PORT, () => {
  console.log(`We're up on PORT ${PORT}`);
})