const express = require('express');

const router = express.Router();

const userController = require('../controllers/userController');

router.get('/', (req, res) => {
  res.status(200).json({ message: '/api route ping' });
});

// THIS IS THE MAIN CALLBACK URL FOR GITHUB OAUTH
router.get('/oauth/callback', userController.authenticateUser, userController.requestToken);

module.exports = router;