const promise = require('bluebird');

const options = { promiseLib: promise };

const pgp = require('pg-promise')(options);
const connectionString = 'postgres://localhost:5432/faves';
const db = pgp(connectionString);

// Endpoint for a list of favorites
// e.g. curl http://ENV/favorites?userId={userId}

function getAllFavorites(req, res, next) {
  try {
    const userId = parseInt(req.query.userId);
    db.any('select event_id from faves where user_id = $1', userId)
      .then(favorites => {
        res.status(200)
          .json({
            status: 'sucess',
            favorites: ids(favorites),
            message: "Retrieved favorites for " + userId
          });
      })
      .catch(err => {
        res.status(400).json({ status: 'bad_request'});
      });
    } catch (NumberFormatException) {
      return res.status(400)
        .json({
          success: false,
          message: 'Invalid User Id.'
        });
    }
}

function ids(favorites) {
  return favorites.map((f) => f['event_id'])
}

//  Endpoint for creating a new favorite for an user
// e.g. curl --data "eventId=2&userId=1" http://ENV/favorites

function createFavorite(req, res, next) {
  try{
    req.body.userId = parseInt(req.body.userId);
    db.none("INSERT into faves(event_id, user_id, created_at) VALUES(${eventId}, ${userId}, current_timestamp)", req.body)
      .then(() => {
        res.status(200)
          .json({
            status: 'success',
            message: 'Added one favorited event for user'
          })
      })
      .catch(err => {
        res.status(400)
          .json({
            success: false,
            message: err
        })
      });    
    }
    catch (Exception) {
      return res.status(400).json({
        success: false,
        message: 'Invalid params'
      });
    }
  };

//  Endpoint for removing a new favorite for an user
// e.g. curl -X DELETE -d 'userId=1' http://localhost:3001/favorites/{eventId}

function removeFavorite(req, res, next) {
  try {
    const eventId = req.params.eventId;
    const userId = parseInt(req.body.userId);
    db.none('DELETE from faves where event_id = $1 and user_id = $2', [eventId, userId])
      .then(() => {
        res.status(200)
          .json({
            status: 'sucess',
            message: 'Deleted one favorited event for user ' + userId
          })
      })
      .catch(err => {
        res.status(400)
          .json({
            success: false,
            message: err
        });
    });    
  }
  catch(Exception) {
    return res.status(400).json({
      success: false,
      message: 'Invalid params'
    });
  }

};

module.exports = {
  getAllFavorites: getAllFavorites,
  createFavorite: createFavorite,
  removeFavorite: removeFavorite
};