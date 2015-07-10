var invert = require('invert-obj');

function UnderlyingSettlDisruptionProvision (underlyingSettlDisruptionProvision) {
  this.message = underlyingSettlDisruptionProvision;
}

UnderlyingSettlDisruptionProvision.prototype.value = function () {
  return this.message;
};

UnderlyingSettlDisruptionProvision.Tag = '2297';

UnderlyingSettlDisruptionProvision.Type = 'INT';

module.exports = UnderlyingSettlDisruptionProvision;