'use strict'
var expect = require('chai').expect;
var lineendings = require('../dist/index');
describe('lineendings functions test',() => {
    
    // Check Roundtripping
   
    it('CRLF should survive roundtrip function', ()=> {
        expect(roundtrip('\r\n')).to.equal(lineendings.CRLF_CHARS);
    });
    it('NEL should survive roundtrip function', ()=> {
        expect(roundtrip('\u0085')).to.equal(lineendings.NEL_CHARS);
    });
    it('LF should survive roundtrip function', ()=> {
        expect(roundtrip('\n')).to.equal('\n');
    });
    it('Other char should return UNKNOWN typing', ()=> {
        var result = lineendings.EndOfLineStringToType('a');
        
        expect(result).to.equal(lineendings.UNKNOWN_TYPE_VALUE);
    });
    it('roundtripping Other char should return LF', ()=> {
        expect(roundtrip('z')).to.equal(lineendings.LF_CHARS);
    });
})
function roundtrip(eolString) {
    var type = lineendings.EndOfLineStringToType(eolString);
    var result = lineendings.EndOfLineTypeToString(type);
    return result;
}