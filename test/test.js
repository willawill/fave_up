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
    .post('/favorites', { userId: 1, eventId: 2})
    .then(res => {
      expect(res).to.have.status(200)
    })
  })
})