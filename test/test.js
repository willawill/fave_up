'use strict';
 
const chai = require('chai');  
const expect = require('chai').expect;
 
chai.use(require('chai-http'));
const app = require('../server/index.js');

describe('API endpoint /favorites', () => {
  it('returns all the favorites for an user', () => {
    return chai.request(app)
      .get('/favorites?userId=2')
      .then(res => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      })
  })
})

describe('API endpoint for creating a new favorite', () => {
  it('returns 200 when successful', () => {
    return chai.request(app)
      .post('/favorites')
      .set('content-type', 'application/json')
      .send({ userId: 1, eventId: 2})
      .then(res => {
        expect(res).to.have.status(200)
        expect(res.body.message).equal('Added one favorited event for user');

      })
  })

  it('returns 400 when the user id is NaN', () => {
    return chai.request(app)
      .post('/favorites')
      .send({ userId: 'hello', eventId: 2})
      .set('content-type', 'application/json')
      .then(res => {
        expect(res).to.have.status(400)
      })

  })
})

describe('API endpoint for removing a favorite', () => {
  it('returns 200 when successful', () => {
     return chai.request(app)
      .del('/favorites/2')
      .send({ userId: 1 })
      .set('content-type', 'application/json')
      .then(res => {
        expect(res).to.have.status(200)
        expect(res.body.message).equal('Deleted one favorited event for user 1');
      })
  })

  it('returns 400 when the user id is not a number', () => {
    return chai.request(app)
      .del('/favorites/2')
      .set('content-type', 'application/json')
      .send({ userId: 'hello' })
      .then(res => {
        expect(res).to.have.status(400)
      })
  })
})