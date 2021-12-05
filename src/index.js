const app = require('./app');
// data base
require('./database')

app.listen(app.get('port'), () => {
  console.log(`the server is listening on port: http://localhost:${app.get('port')}`);
} )