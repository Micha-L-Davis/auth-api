'use strict';

const express = require('express');
const axios = require('axios');
const { limiter } = require('../models');
const router = express.Router();
const bearerAuth = require('../auth/middleware/bearer');
const authorize = require('../auth/middleware/acl');
const req = require('express/lib/request');


router.param('limiter', async (req, res, next) => {
  const limiterName = req.params.limiter;
  const currentLimiter = await limiter.get(limiterName);
  if (currentLimiter) {
    req.limiter = currentLimiter;
    next();
  } else {
    next('Invalid Limiter');
  }
});

router.post('/create', bearerAuth, authorize('create'), async (request, response) => {
  let newLimiter = await limiter.create(request.body);
  response.status(200).send(newLimiter);
});

router.get('/suggest/:limiter', bearerAuth, authorize('read'), async (request, response) => {
  if (request.limiter.recentOnly === false) {
    let url = `http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${process.env.API_KEY}&steamid=${request.limiter.accountId}&format=json`;

    let results = await axios.get(url);

    // and here we need to reduce the results down to just three

    response.status(200).send(results.data);
  }

  if (request.limiter.recentOnly === true) {
    let url = `http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${process.env.API_KEY}&steamid=${request.limiter.accountId}&format=json`;

    let results = await axios.get(url);

    // and here we need to reduce the results down to just three
    response.status(200).send(results.data);
  }
});

router.put('/update/:limiter', bearerAuth, authorize('update'), async (request, response) => {
  console.log(request.body);
  let updatedLimiter = await limiter.update(request.limiter.id, request.body);
  console.log(updatedLimiter);
  response.status(200).send(updatedLimiter);
});

router.delete('/delete/:limiter', bearerAuth, authorize('delete'), async (request, response) => {
  try {
    await limiter.delete(request.limiter.id);
    response.status(200).send('Limiter deleted');
  } catch (error) {
    console.error(error);
    response.status(500).send(`Delete error ${error}`);
  }
});

module.exports = router;
