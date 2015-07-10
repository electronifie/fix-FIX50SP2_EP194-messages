var invert = require('invert-obj');

function InstrumentScopeSecurityAltIDSource (instrumentScopeSecurityAltIdsource) {
  this.message = instrumentScopeSecurityAltIdsource;
}

InstrumentScopeSecurityAltIDSource.prototype.value = function () {
  return this.message;
};

InstrumentScopeSecurityAltIDSource.Tag = '1542';

InstrumentScopeSecurityAltIDSource.Type = 'STRING';

module.exports = InstrumentScopeSecurityAltIDSource;