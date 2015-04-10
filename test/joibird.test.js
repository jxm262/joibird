var joibird = require('../lib/joibird')
    , mocha = require('mocha')
    , chai = require('chai')
    , sinon = require('sinon')
    , should = chai.should();

describe('joibird.js', function () {

    it('validate function should be async', function(){
        (joibird.validate.__isPromisified__).should.be.true;
    });

});
