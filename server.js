const express = require('express');
const bodyParser = require('body-parser');
const app = express();


var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static("ACP"));

app.post('/', urlencodedParser ,(req, res) => {
  console.log(`parameteres are : `, req.body.number.toString());
  
  var bruit2 = 'n';
  if(req.body.bruit){
    bruit2 = 'y';
  }
  const {PythonShell} = require('python-shell');

  
  let options = {
  mode: 'text',

  args: [req.body.axes.toString(), req.body.number.toString() , bruit2]

  };

  PythonShell.run('acp.py', options, function (err, results) {
    if (err) throw err;
    });
    
    res.redirect(req.get('referer'));  
  
  });
  

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});