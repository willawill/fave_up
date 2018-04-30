# Fave up

## This is an app built on top of Meetup for meetup users to save their favorite groups.

### Plans

- Flow type
- Jest testing
- Backend with Postgresql
- Api in node express


### To install

`yarn install`

`psql -f faves.sql`

### To start

`npm start`

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
2. Delete favorite Button.
3. Favorite in the nav bar with a number e.g. My Favorites (5).
4. Toggle between Search Result vs Favorites

Improvement:
1. Use tools like knex.js to be flexible with database
2. Abstract backend with data layer and server layer rather than calling queries directly.
3. Add flow.