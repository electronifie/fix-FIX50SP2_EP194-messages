var invert = require('invert-obj');

function InstrumentScopeSecurityIDSource (instrumentScopeSecurityIdsource) {
  this.message = instrumentScopeSecurityIdsource;
}

InstrumentScopeSecurityIDSource.prototype.value = function () {
  return this.message;
};

InstrumentScopeSecurityIDSource.Tag = '1539';

InstrumentScopeSecurityIDSource.Type = 'STRING';

module.exports = InstrumentScopeSecurityIDSource;