var invert = require('invert-obj');

function NoInstrumentScopes (noInstrumentScopes) {
  this.message = noInstrumentScopes;
}

NoInstrumentScopes.prototype.value = function () {
  return this.message;
};

NoInstrumentScopes.Tag = '1656';

NoInstrumentScopes.Type = 'NUMINGROUP';

module.exports = NoInstrumentScopes;