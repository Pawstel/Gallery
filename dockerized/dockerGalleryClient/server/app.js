const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Queries = require('../database/Queries.js');
const redis = require('redis');

const app = express();

const client = redis.createClient('6379', 'pawstel_gallery_redis');

// making a middleware to track all incoming requests --REMOVED DUE TO REDUCED SERVER SPEED WHEN TESTING
// app.use((req, res, next) => {
//   console.log('Request method: ', req.url);
//   next();
// });

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// access the static files
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(bodyParser.json());

app.use('/pawstel/:id', express.static(path.join(__dirname, '../client/dist')));

app.get('/listings/:listing_id/photos', (req, res) => {
  const listingId = req.params.listing_id;

  client.get(`listing${listingId}:photos`, (err, data) => {
    if (data) {
      res.send(data)
      res.end();
    } else {
      // query the database to get all data from the listing_photos table
      Queries.getListingPhotos(listingId, (err, results) => {
        if (err) {
          console.log('Server side error in query to get data from the listings_data table', err);
        } else {
          // console.log('Server side success in query to get data from the listings_data table', res);
          let resString = JSON.stringify(results);
          client.setex(`${listingId}:photos`, 60, resString);
          res.send(resString);
          res.end();
        }
      });

    }

  })


  // res.send(200);
});

app.get('/users/:user_id/list', (req, res) => {
  const userId = req.params.user_id;
  // query the database to get all data from the lists table

  client.get(`user${userId}:list`, (err, data) => {
    if (data) {
      res.send(data)
      res.end()
    } else {
      // query the database to get all data from the listing_photos table
      Queries.getLists(userId, (err, results) => {
        if (err) {
          console.log('Server side error in query to get data from the user_lists table', err);
        } else {
          // console.log('Server side success in query to get data from the listings_data table', res);
          let resString = JSON.stringify(results);
          client.setex(`user${userId}:lists`, 60, resString);
          res.send(resString);
          res.end();
        }
      });

    }

  })
});

app.post('/users/:user_id/addList', (req, res) => {
  const userId = req.params.user_id;
  const listName = req.body.list_name;

  // querty the database to insert the new list into the lists table
  Queries.addList(userId, listName, (err, results) => {
    if (err) {
      console.log('Server side error in query to add list to the lists table ', err);
    } else {
      // console.log('Server side success in query to add list to the lists table ', res);
      res.sendStatus(201);
      res.end()
    }
  });
});

app.get('/listings/:listing_id/lists', (req, res) => {
  const listingId = req.params.listing_id;
  // query the database

  client.get(`listing${listingId}:lists`, (err, data) => {
    if(data){
      res.send(data);
      res.end()
    } else {
      Queries.getListsOfListing(listingId, (err, results) => {
        if (err) {
          console.log('Server side error in querying listings-lists');
        } else {
          // console.log('Server side success in querrying listings_lists');
          let resString = JSON.stringify(results);
          client.setex(`listing${listingId}:lists`, 60, resString)
          res.send(resString);
          res.end();
        }
      });

    }
  })


});

app.post('/listings/:listing_id/lists/:list_id', (req, res) => {
  const listingId = req.params.listing_id;
  const listId = req.params.list_id;

  // console.log('listingId is ', listingId);
  // console.log('listId is ', listId);

  Queries.addToFavorite(listingId, listId, (err, results) => {
    if (err) {
      // console.log('Server side error in query to add to the listings_lists table ', err);
    } else {
      // console.log('Server side success in query to add to the listings_lists table ', results);
      res.sendStatus(201);
      res.end();
    }
  });
});

app.delete('/listings/:listing_id/lists/:list_id', (req, res) => {
  const listingId = req.params.listing_id;
  const listId = req.params.list_id;

  // console.log('listingId is ', listingId);
  // console.log('listId is ', listId);

  Queries.removeFromFavorite(listingId, listId, (err, results) => {
    if (err) {
      // console.log('Server side error in query to delete from the listings_lists table ', err);
    } else {
      // console.log('Server side success in query to delete from the listings_lists table ', results);
      res.sendStatus(200);
      res.end();
    }
  });
});

app.get('/listings/:listing_id/details', (req, res) => {
  const listingId = req.params.listing_id;

  client.get(`listing${listingId}:details`, (err, data) => {
    if(data){
      res.send(data);
      res.end();
    } else {
      Queries.getListingDetails(listingId, (err, results) => {
        if (err) {
          // console.log('Server side error in querying listings');
        } else {
          // console.log('Server side success in querrying listings');
          let resString = JSON.stringify(results);
          client.setex(`listing${listingId}:details`, 60, resString)
          res.send(resString);
          res.end();
        }
      });

    }
  })

});

// app.get('/listings', (req, res) => {
//   console.log('CRUD REQ-LISTINGS: get');
//   // console.log(req);
//   // console.log(res);
//   res.end();
// })

// app.post('/listings', (req, res) => {
//   console.log('CRUD REQ-LISTINGS: post');
//   // console.log(req);
//   // console.log(res);
//   res.end();

// })

// app.put('/listings/:listing_id', (req, res) => {
//   console.log('CRUD REQ-LISTINGS: put');
//   // console.log(req);
//   // console.log(res);
//   res.end();

// })

// app.delete('/listings/:listing_id', (req, res) => {
//   console.log('CRUD REQ-LISTINGS: delete');
//   // console.log(req);
//   // console.log(res);
//   res.end();

// })

module.exports = app;
