const express = require('express');
const exphbs = require('express-handlebars');
const { engine } = require('express-handlebars');
const path = require('path');

const bodyPatser = require('body-parser');
const db = require('./config/database.js');
const router = require('./routes/gigs.js');

db.authenticate()
  .then(() => console.log('databse connected'))
  .catch((err) => console.log(err));

const app = express();

// handlebars
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.engine('handlebars', engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// body parser
app.use(bodyParser.urlencoded({ extended: false }));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send('index'));

// gig routes
app.use('/gigs', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
