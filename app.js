    var express = require('express')
    var app = express()

    app.get('/', function(req, res) {
      res.send('Hello world!')
    })

    app.get('/:time', function(req, res) {

      var timeVar = req.params.time;
      var date;

      var formatting = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };

      if (isNaN(timeVar)) {

        date = timeVar;
        timeVar = new Date(timeVar) / 1000;

        if (isNaN(timeVar)) 
          date = null;

      } else {

      
        date = new Date(timeVar * 1000);
        date = date.toLocaleDateString("en-eu", formatting);

        timeVar = Number(timeVar);



      }

      res.json({unixtime: timeVar, natural: date})


    })

    app.listen(80, function(err, success) {
      if (err) return err;
      console.log("Connected to port 3000");
    });