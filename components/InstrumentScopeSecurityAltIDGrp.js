var NoInstrumentScopeSecurityAltID = require('../fields/NoInstrumentScopeSecurityAltID');
var InstrumentScopeSecurityAltID = require('../fields/InstrumentScopeSecurityAltID');
var InstrumentScopeSecurityAltIDSource = require('../fields/InstrumentScopeSecurityAltIDSource');

function InstrumentScopeSecurityAltIDGrp (instrumentScopeSecurityAltIdgrp) {
  this.message = instrumentScopeSecurityAltIdgrp;
}

/* group */

/* field */
InstrumentScopeSecurityAltIDGrp.prototype.instrumentScopeSecurityAltId = function () {
  return new InstrumentScopeSecurityAltID(this.message.tags[InstrumentScopeSecurityAltID.Tag]);
};

/* field */
InstrumentScopeSecurityAltIDGrp.prototype.instrumentScopeSecurityAltIdsource = function () {
  return new InstrumentScopeSecurityAltIDSource(this.message.tags[InstrumentScopeSecurityAltIDSource.Tag]);
};

/* end group */

InstrumentScopeSecurityAltIDGrp.Tag = '1540';

module.exports = InstrumentScopeSecurityAltIDGrp;