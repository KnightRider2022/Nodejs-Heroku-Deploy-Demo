const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = process.env.PORT || 3000

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/index.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(port);

console.log('Running at Port 3000');
