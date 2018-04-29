'use strict';
 
const chai = require('chai');  
const expect = require('chai').expect;
 
chai.use(require('chai-http'));
 
const app = require('../server/index.js');

describe('API endpoint /favorites/:userID', () => {
	it('returns all the favorites for an user', () => {
    return chai.request(app)
      .get('/favorites/1')
      .then(res => {
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.be.an('object');
      })
  })
})