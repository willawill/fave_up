# Fave up

## This is an app built on top of Meetup for meetup users to save their favorite groups.

### Plans

- Flow type
- Jest testing
- Backend with cloudfire
- Api in node

### Data schema:

- User

	- ID: integer

- Favorite

	- Meetup ID: integer
	- User ID: integer
	- Added at: date time

### Api Endpoints
1. List of all the favorite events: #get api/favorites/user_id
2. Add a new favorite to an user: #post api/favorites { id, userId, eventId }
3. Delete a favorite for an user: #delete api/favorite { favoriteId }

### UI components
1. Add Favorite Button.
2. Delete favorite button.
3. Favorite in the nav bar with a number e.g. Favorites (5).
4. My Favorites in the nav bar.


Improvement:
1. Use tools like knex.js to be flexible with database
2. Add end to end test
3. Add flow 