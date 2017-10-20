var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

import arrayToStops from '../functions/arrayToStops';

describe('Array', function() {
  describe('#indexOf()', function() {
    it('Testing retrun type',function(){
      expect(arrayToStops(["aaa","bbbb"])).to.be.a('array')
    });
    it('Test array elements', function(){
      let returnElemnt = arrayToStops("aaa","bbb","ccc");
      console.log(returnElemnt[0]);
      expect(returnElemnt).to.have.length(3);
    });
  });
});
