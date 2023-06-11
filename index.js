// imports npm packages
require('dotenv').config();
const app = require('./src/app');
const routes = require('./src/router');

// define host & port of server
const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 3010;
app.use('/api/v1', routes);

// server listen
app.listen(port,host,() => {
    console.log(`The API is running on port ${port}....`);
});