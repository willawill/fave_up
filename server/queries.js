const promise = require('bluebird');

const options = {
  // Initialization Options
  promiseLib: promise
};

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/faves';
const db = pgp(connectionString);

getAllFavorites(req, res, next) {
	db.any('select * from faves where id = $1', userId)
    .then(favorites => {
      res.status(200)
        .json({
          status: 'sucess',
          favorites: favorites,
          message: "Retrieved favorites for " + userId
        });
    })
    .catch(err => return next(err));
}

module.exports = {
  getAllFavorites: getAllFavorites,
  createFavorite: createFavorite,
  removeFavorite: removeFavorite
};