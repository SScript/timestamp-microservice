    var express = require('express')
    var app = express()
    var port = Number(process.env.PORT||8080);

    app.get('/', function(req, res) {
      res.send('<h1>Timestamp Microservice</h1><br>'+
      '<h3><a href="http://timestamp-polymorph.herokuapp.com/December%2015,%202015">http://timestamp-polymorph.herokuapp.com/December%2015,%202015</a></h3>'+
      '<h3><a href="http://timestamp-polymorph.herokuapp.com/1450137600">http://timestamp-polymorph.herokuapp.com/1450137600</a></h3>')
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

    app.listen(port, function(err, success) {
      if (err) return err;
      console.log("Connected to port 3000");
    });