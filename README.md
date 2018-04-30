# Fave up

This is a React app built on top of Meetup for meetup users to save their favorite groups.

### To install

1. `yarn install` to install all the dependencies

2. `psql -f faves.sql` to create and seed the database

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
- [x] List of all the favorite events: #get api/favorites/user_id

- [x] Add a new favorite to an user: #post api/favorites { id, userId, eventId }

- [x] Delete a favorite for an user: #delete api/favorite { favoriteId }

### UI components
- [x] Add Favorite
- [x] Remove favorite Button
- [x] Indicator how many favorites the current user has My Favorites (5).
- [x] Toggle between Search Result vs Favorites

### TODOs:

1. Add tools like knex.js to be flexible with database
2. Abstract backend with data layer and server layer rather than calling queries directly. 
3. Add flow.
4. Use Redux.
5. Abstract state object in App.js.
5. Have service object to do the add/remove favorites.

### Questions from SPEC.md

1. The APIs follow RESTful principles with proper methods (`get`, `post`, `delete`). They return 200 and 400 for successful and failing requests.

2. In App.js, the approach on page load is to send requests to both meetup event apis and favorites apis to fetch the data. They are wrapped in one `Promise` which means one of them fails the entire page shows the error. I could have implemented it in a way that the page will only partially render, but it doesn't seem necessary in this scope. In the production, I'd like to have the backend to make the calls and send into the component as props. I understand there isn't session/users in this scope, but I've created a table for User so it's easy to add authetication/authorization.

3. I've broken App.js into smaller components, most of them are pure so it should be fairly easy to reuse or modify. The only exception is MyFavorites, I'd like to add redux for this app so that all the components would be pure.

4. To improve the maintainability, there are several things I can think of:

	* I'd like to swap out the querries.js with a real backend that backed by faster database GraphQL or whatnot.

	* Refator with styled-components over className.

	* Do dirty check on removing/adding favorite, now it's just a state object manipulation.

### My Questions:

* `Meetup.test.jsx` and `App.test.js` were actually not testing anything, fixed App.test.js by using enzyme.

* I'd love to see an example of this assignment that finished within 3 hours, it took me a long time to get to a point where I feel comfortable adding more features.

* I am not super familar with node ecosystem since my backend knowledge is primarily in ruby on rails. Hence there are parts that might be implementated naively. I'd love to hear any feedback on what's the production ready.
