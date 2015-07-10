var invert = require('invert-obj');

function NoRiskInstrumentScopes (noRiskInstrumentScopes) {
  this.message = noRiskInstrumentScopes;
}

NoRiskInstrumentScopes.prototype.value = function () {
  return this.message;
};

NoRiskInstrumentScopes.Tag = '1534';

NoRiskInstrumentScopes.Type = 'NUMINGROUP';

module.exports = NoRiskInstrumentScopes;